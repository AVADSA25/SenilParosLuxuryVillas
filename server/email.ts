import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return {apiKey: connectionSettings.settings.api_key, fromEmail: connectionSettings.settings.from_email};
}

export async function getUncachableResendClient() {
  const { apiKey, fromEmail } = await getCredentials();
  return {
    client: new Resend(apiKey),
    fromEmail: fromEmail
  };
}

export async function sendViewingRequestEmail(data: {
  name: string;
  email: string;
  phone: string;
  message?: string;
}) {
  const { client, fromEmail } = await getUncachableResendClient();
  
  await client.emails.send({
    from: fromEmail,
    to: 'info@senilluxuriousparosvillas.com',
    subject: `SENIL Villas - Viewing Request from ${data.name}`,
    html: `
      <h2>New Viewing Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
      <hr />
      <p><em>Sent from SENIL Paros Villas website</em></p>
    `
  });
}

export async function sendBrochureRequestEmail(data: {
  name: string;
  email: string;
  phone: string;
  message?: string;
}) {
  const { client, fromEmail } = await getUncachableResendClient();
  
  await client.emails.send({
    from: fromEmail,
    to: 'info@senilluxuriousparosvillas.com',
    subject: `SENIL Villas - Brochure Request from ${data.name}`,
    html: `
      <h2>New Brochure Download Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
      <hr />
      <p><em>Sent from SENIL Paros Villas website</em></p>
    `
  });
}
