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
      className={cn("text-secondary-800", className)}
    >
      {children}
      {isRequired && <span className="text-error-danger-500"> *</span>}
    </Typography>
  );
};

export { Label };
