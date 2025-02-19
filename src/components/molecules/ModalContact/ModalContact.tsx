import Typography from "@/src/components/atoms/Typography/Typography";

import { Input } from "../Input/Input";
import { useTranslations } from "next-intl";
import { Button } from "../../atoms/Button/Button";
import PaperPlane from "../../atoms/icons/PaperPlane/PaperPlane";
import { useState } from "react";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { closeModal } from "@/src/stores/slices/modalSlice";
import { useAppDispatch } from "@/src/stores/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { showSnackbar } from "@/src/stores/slices/snackbarSlice";
interface FormData {
  email: string;
  Telefoonnummer: string;
}
const contactOptions = [
  { id: "telefoon", value: "telefoon", label: "TELEFOON" },
  { id: "sms", value: "sms", label: "SMS" },
  { id: "whatsapp", value: "whatsapp", label: "WHATSAPP" },
];
const ModalContact: React.FC = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const [selectedMethod, setSelectedMethod] = useState("telefoon");

  const handleChange = (value: string) => {
    setSelectedMethod(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data Submitted: ", data);
    dispatch(closeModal("ModalContact"));
    dispatch(
      showSnackbar({
        message: "Formulier succesvol verzonden!",
        variant: "success",
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="p-4">
        <Typography
          variant="interTextSmSemibold"
          className=" text-secondary-600"
        >
          {t("TERUGBELVERZOEK")}
        </Typography>
      </div>
      <div className="p-6 border border-y-gray-200 flex flex-col gap-4">
        <div>
          <div>
            <Typography
              component="label"
              variant="interTextMdBaseRegular"
              className="text-gray-800"
            >
              {t("Hoe wilt u gecontacteerd worden?")}
            </Typography>
            <span className="text-error-danger-500"> *</span>
          </div>
          <RadioGroup
            options={contactOptions}
            selectedValue={selectedMethod}
            onChange={handleChange}
            name="contact-method"
          />
        </div>

        <Input
          label={t("Email-adres")}
          placeholder={t("typ hier")}
          variant="default"
          isRequired={true}
          size="md"
          {...register("email", {
            required: `${t("Email-adres")} ${t("is vereist")}`,
          })}
          errorMessage={errors.email?.message}
          type="email"
        />
        <Input
          label={t("Telefoonnummer")}
          placeholder={t("typ hier")}
          variant="default"
          size="md"
          isRequired={true}
          {...register("Telefoonnummer", {
            required: `${t("Telefoonnummer")} ${t("is vereist")}`,
          })}
          errorMessage={errors.Telefoonnummer?.message}
          type="number"
        />
      </div>
      <div className="px-6 py-4 bg-gray-25 flex items-center justify-end flex-wrap">
        <Button
          variant={"linkPrimary"}
          size={"md"}
          iconPosition="right"
          onClick={() => dispatch(closeModal("ModalContact"))}
        >
          {t("ANNULEREN")}
        </Button>
        <Button
          variant={"primary"}
          size={"md"}
          icon={<PaperPlane />}
          iconPosition="right"
        >
          {t("VERSTUREN")}
        </Button>
      </div>
    </form>
  );
};

export default ModalContact;
