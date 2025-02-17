import Typography from "@/src/components/atoms/Typography/Typography";

import { Input } from "../Input/Input";
import { useTranslations } from "next-intl";
import { Button } from "../../atoms/Button/Button";
import PaperPlane from "../../atoms/icons/PaperPlane/PaperPlane";

import { closeModal } from "@/src/stores/slices/modalSlice";
import { useAppDispatch } from "@/src/stores/hooks";

import CloseCircle from "../../atoms/icons/CloseCircle/CloseCircle";

const ModalOntvang: React.FC = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-center gap-12 px-6 py-4">
        <div className="flex flex-col gap-2">
          <Typography
            variant="interTextMdBaseMedium"
            className="text-gray-500"
            component="h2"
          >
            {t("ONTVANG PERSOONLIJK ADVIES VOOR OPTIMAAL LEIDERSCHAP")}
          </Typography>
          <Typography
            variant="interTextSmSemibold"
            className="text-gray-500 text-sm font-normal"
            component="p"
          >
            {t(
              "Wil jij vrijblijvend sparren over de mogelijkheden om optimaal te functioneren als leidinggevende? Ik bel je graag terug"
            )}
          </Typography>
        </div>
        <CloseCircle
          size={24}
          className="shrink-0 cursor-pointer"
          color="#667085"
          onClick={() => dispatch(closeModal("ModalOntvang"))}
        />
      </div>
      <div className="px-6 py-4 border border-y-gray-200 flex flex-col gap-4">
        <Input
          label={t("Naam")}
          placeholder={t("typ hier")}
          variant="default"
          isRequired={true}
          size="md"
        />
        <Input
          label={t("Email-adres")}
          placeholder={t("typ hier")}
          variant="default"
          isRequired={true}
          size="md"
        />
        <Input
          label={t("Telefoonnummer")}
          placeholder={t("typ hier")}
          variant="default"
          size="md"
          isRequired={true}
        />
      </div>
      <div className="px-6 py-4 bg-gray-25 flex items-center justify-end flex-wrap">
        <Button
          variant={"linkPrimary"}
          size={"md"}
          iconPosition="right"
          onClick={() => dispatch(closeModal("ModalOntvang"))}
        >
          {t("ANNULEREN")}
        </Button>
        <Button
          variant={"primary"}
          size={"md"}
          icon={<PaperPlane />}
          iconPosition="right"
          onClick={() => dispatch(closeModal("ModalOntvang"))}
        >
          {t("VERSTUREN")}
        </Button>
      </div>
    </>
  );
};

export default ModalOntvang;
