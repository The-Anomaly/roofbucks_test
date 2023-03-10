import * as React from "react";
import styles from "./styles.module.css";
import { Modal } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { Button, Input } from "components/generalComponents";
import { ModalProps } from "types";
import { ArrowRight } from "assets";

interface ResetData {
  password: string;
  confirmPassword: string;
}

const initialValues: ResetData = {
  confirmPassword: "",
  password: "",
};

export interface ResetModalProps extends ModalProps {
  reset: (data: ResetData) => void;
  login: () => void;
}

const resetSchema = yup
  .object({
    password: yup
      .string()
      .required("Required")
      .min(8, "Password should be at least 8 characters long")
      .matches(/[A-Z]/, "Password should contain an uppercase character")
      .matches(/[a-z]/, "Password should contain an lowercase character")
      .matches(/[0-9]/, "Password should contain at least one number")
      .equals([yup.ref("confirmPassword")], "Passwords do not match"),
    confirmPassword: yup
      .string()
      .required("Required")
      .min(8, "Password should be at least 8 characters long")
      .matches(/[A-Z]/, "Password should contain an uppercase character")
      .matches(/[a-z]/, "Password should contain an lowercase character")
      .matches(/[0-9]/, "Password should contain at least one number")
      .equals([yup.ref("password")], "Passwords do not match"),
  })
  .required();

const ResetPasswordModalUI: React.FC<ResetModalProps> = ({
  show,
  closeModal,
  reset,
  login,
}: ResetModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetData>({
    resolver: yupResolver(resetSchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<ResetData> = (data) => reset(data);

  return (
    <Modal className={styles.login} show={show} onHide={closeModal} centered>
      <Button
        onClick={() => {
          closeModal();
          login();
        }}
        type="tertiary"
        className={styles.outsideBtn}
      >
        <ArrowRight /> Back to login
      </Button>
      <Modal.Body>
        <h1 className={styles.ttl}>Reset Password</h1>
        <form className={styles.form}>
          <Input
            label="Enter Password"
            placeholder="---------"
            type="password"
            parentClassName={styles.input}
            required
            validatorMessage={errors.password?.message}
            name="password"
            register={register}
          />
          <Input
            label="Confirm Password"
            placeholder="---------"
            type="password"
            parentClassName={styles.input}
            required
            validatorMessage={errors.confirmPassword?.message}
            name="confirmPassword"
            register={register}
          />

          <ul className={styles.list}>
            Password must:
            <li>Have atleast one lower case character</li>
            <li>Have atleast one upper case character</li>
            <li>Have atleast one number</li>
            <li>Be atleast 8 characters</li>
          </ul>
          <Button
            className={styles.continue}
            type="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Continue
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export { ResetPasswordModalUI };
