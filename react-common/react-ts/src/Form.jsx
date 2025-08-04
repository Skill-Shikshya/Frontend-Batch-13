import { useForm } from "react-hook-form";

export default function Form() {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = form;
  const username = watch("username");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("username", {
              required: { value: true, message: "username is required" },
              minLength: {
                value: 2,
                message: "Name must be atleast 2 letters long",
              },
            })}
          />
          {errors.username?.message && <div>{errors.username.message}</div>}
        </div>
        {username === "asim" && (
          <div>
            <input {...register("password")} />
          </div>
        )}
        <input type="submit" />
      </form>
      <ul>
        <li>
          name: Asim{" "}
          <button
            onClick={() => {
              form.setValue("username", "asim");
              form.setValue("password", "password");
            }}
          >
            Edit asim info
          </button>
        </li>
      </ul>
    </>
  );
}
