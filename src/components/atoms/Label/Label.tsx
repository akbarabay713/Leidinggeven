import Typography from "../Typography/Typography";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  isRequired?: boolean;
}

const Label = ({ children, isRequired }: LabelProps) => {
  return (
    <Typography
      variant="interTextMdBaseRegular"
      component="label"
      className="text-[#1D2939]"
    >
      {children}
      {isRequired && <span className="text-[#F04438]"> *</span>}
    </Typography>
  );
};

export { Label };
