import useBreadcrumbs from "use-react-router-breadcrumbs"

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs()

  return <>{breadcrumbs.map(({ breadcrumb }) => breadcrumb)}</>
}

export default Breadcrumbs
