import cn from "classnames";
import Typography from "../Typography/Typography";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  isRequired?: boolean;
  className?: string;
}

const Label = ({ children, isRequired, className }: LabelProps) => {
  return (
    <Typography
      variant="interTextMdBaseRegular"
      component="label"
      className={cn("text-[#1D2939]", className)}
    >
      {children}
      {isRequired && <span className="text-[#F04438]"> *</span>}
    </Typography>
  );
};

export { Label };
