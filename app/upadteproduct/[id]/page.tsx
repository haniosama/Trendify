import FormUpdate from "@/components/formupdate";

// interface UpdateButtonProps {
//   productId: number;
// }

const UpdateItem = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <FormUpdate id={params.id} />
    </>
  );
};
export default UpdateItem;
