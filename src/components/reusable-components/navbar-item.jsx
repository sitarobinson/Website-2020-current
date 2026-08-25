
export default function NavbarItem(props) {
  const onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  let className = "tab-list-item";

  if (props.activeTab === props.label) {
    className += " tab-list-active";
  }

  return (
    <li 
      className={className} 
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="tab"
      aria-selected={props.activeTab === props.label}
    >
      {props.label}
    </li>
  );
}
