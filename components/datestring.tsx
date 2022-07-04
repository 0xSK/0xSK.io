const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

type DateProps = {
  date: string;
  className?: string;
};

const DateString = ({ date, className = '' }: DateProps): JSX.Element => {
  // input: 2020-01-01
  // output: Jan 1, 2020
  const [year, month, day] = date.split('-');
  return (
    <span className={className}>
      {`${months[Number(month) - 1]} ${day}, ${year}`}
    </span>
  );
};

export default DateString;
