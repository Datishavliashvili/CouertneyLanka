import styles from "./FormSection.module.css";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { formSchema } from "../schemas/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      username: "",
      phoneNumber: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    if (data) {
      toast.success("Form Sent Successfully");
    } else {
      toast.error("Sending Form Failed");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sumContainer}>
        <div className={styles.imgContainer}></div>
        <div className={styles.formContainer}>
          <div className={styles.container}>
            <h1 className={styles.formText}>
              Connect With Your <br /> Next Great Hire Today!
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.formStyles}
            >
              <div>
                <p>Company</p>
                <input
                  {...register("company")}
                  type="text"
                  placeholder="Company"
                />
                {errors.company && (
                  <p id={styles.errors}>{errors.company.message}</p>
                )}
              </div>
              <div>
                <p>Your Name</p>
                <input
                  {...register("username")}
                  type="text"
                  placeholder="Your Name"
                />
                {errors.username && (
                  <p id={styles.errors}>{errors.username.message}</p>
                )}
              </div>
              <div className={styles.inputContainer}>
                <p>Phone Number</p>
                <input
                  {...register("phoneNumber")}
                  type="text"
                  placeholder="Phone Number"
                />
                {errors.phoneNumber && (
                  <p id={styles.errors}>{errors.phoneNumber.message}</p>
                )}
              </div>
              <div className={styles.inputContainer}>
                <p>Email</p>
                <input {...register("email")} type="text" placeholder="Email" />
                {errors.email && (
                  <p id={styles.errors}>{errors.email.message}</p>
                )}
              </div>
              <div className={styles.inputContainer}>
                <p>Project Details</p>
                <input
                  {...register("description")}
                  type="text"
                  placeholder="Project Details"
                  className={styles.description}
                />
                {errors.description && (
                  <p id={styles.errors}>{errors.description.message}</p>
                )}
              </div>
              <div className={styles.secFormContainer}>
                <input type="checkbox" id={styles.checkBox} />
                <p id={styles.checkP}>
                  By sending this form I confirm that I have read and accept the
                  <span id={styles.formSpan}> Privacy Policy</span>
                </p>
              </div>

              <button className={styles.mainBtn} disabled={isSubmitting}>
                {isSubmitting ? (
                  "Loading..."
                ) : (
                  <>
                    GET CONSULTATION
                    <img src="/arrow.svg" alt="" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
