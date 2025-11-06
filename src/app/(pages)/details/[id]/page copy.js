import { Suspense } from "react";

const PetDetails = async ({ params }) => {
  const { id } = await params;
  return <h1>Detailpage id: {id}</h1>;
};

export default async function detailpage({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PetDetails params={params} />
    </Suspense>
  );
}
