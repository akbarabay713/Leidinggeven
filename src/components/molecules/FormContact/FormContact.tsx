"use client";
import React from "react";
import s from "./FormContact.module.scss";
import { useTranslations } from "next-intl";
import { Input } from "../Input/Input";
import { Button } from "../../atoms/Button/Button";
import PaperPlane from "../../atoms/icons/PaperPlane/PaperPlane";
import { Textarea } from "../Textarea/Textarea";
import { Checkbox } from "../Checkbox/Checkbox";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
interface FormData {
  naam: string;
  email: string;
  Bedrijfnaam: string;
  Telefoonnummer: string;
  Bericht: string;
  newsletter: boolean;
}

const FormContact: React.FC = () => {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data Submitted: ", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={s.form}>
        <div className={s.formWrapper}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Input
              label="Naam"
              placeholder="typ hier"
              variant="default"
              isRequired={true}
              size="md"
              {...register("naam", {
                required: `${t("Naam")} ${t("is vereist")}`,
              })}
              errorMessage={errors.naam?.message}
            />
            <Input
              label={t("Bedrijfnaam")}
              placeholder="typ hier"
              variant="default"
              size="md"
              {...register("Bedrijfnaam", {
                required: `${t("Bedrijfnaam")} ${t("is vereist")}`,
              })}
              errorMessage={errors.Bedrijfnaam?.message}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-4">
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
            />
          </div>
          <Textarea
            label={t("Bericht")}
            placeholder={t("typ hier")}
            variant="default"
            isRequired={true}
            className="mb-4"
            {...register("Bericht", {
              required: `${t("Bericht")} ${t("is vereist")}`,
            })}
            errorMessage={errors.Bericht?.message}
          />

          <Controller
            name="newsletter"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                label={t(
                  "Ja, ik ga er mee akkoord om af en toe emails te ontvangen met gratis tips en leuke updates"
                )}
                variant="default"
                className="text-gray-500 flex items-center gap-4"
                id="checkbox"
              />
            )}
          />
        </div>
        <div className={s.formFooter}>
          <Button
            variant={"primary"}
            size={"md"}
            icon={<PaperPlane />}
            iconPosition="right"
          >
            {t("VERSTUREN")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormContact;
