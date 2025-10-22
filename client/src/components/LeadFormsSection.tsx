import BrochureGate from "./BrochureGate";
import ViewingRequestForm from "./ViewingRequestForm";

export default function LeadFormsSection() {
  return (
    <section className="py-24 bg-accent" id="forms" data-testid="section-forms">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ViewingRequestForm />
          <BrochureGate />
        </div>
      </div>
    </section>
  );
}
