import CSS from './Container.module.css';

export default function Container({ children }) {
  return <div className={CSS.container}>{children}</div>;
}
