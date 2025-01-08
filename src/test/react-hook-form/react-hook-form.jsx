import { useForm } from "react-hook-form";

import styles from "./react-hook-form.module.scss";
import { useContext, useState } from "react";

import EmployeeContext from "../context/context";

const ReactHookForm = () => {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const employee = useContext(EmployeeContext);
  console.log("employee........", employee);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* <h2>{employee}</h2> */}
      <form style={{ padding: "20px" }} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.field}>
          <label className={styles.label}>Enter your name: </label>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // {...register("name")}
          ></input>
        </p>
        <p className={styles.field}>
          <label className={styles.label}>Enter your username: </label>
          <input name="username" {...register("username")}></input>
        </p>
        <p className={styles.field}>
          <label className={styles.label}>Enter your email: </label>
          <input name="email" {...register("email")}></input>
        </p>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default ReactHookForm;
