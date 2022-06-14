
interface IDivider {
  children: React.ReactElement
}

export const Divider = ({children}: IDivider) => <div className="mt-3">{children}</div>