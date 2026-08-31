import VillaCard from '../VillaCard';

export default function VillaCardExample() {
  return (
    <VillaCard
      name="Top"
      area="355.69"
      bedrooms={6}
      price="€3.9m"
      delivery="Delivery: End of 2026"
      brochureUrl="/brochures/villa-a-top.pdf"
      images={{
        exterior: "https://i.imgur.com/9KZ5QmK.jpg",
        interior: "https://i.imgur.com/xjYZK8L.jpg",
        detail: "https://i.imgur.com/7sYGK2M.jpg"
      }}
      floorplan="https://i.imgur.com/floorplan-top.jpg"
    />
  );
}
