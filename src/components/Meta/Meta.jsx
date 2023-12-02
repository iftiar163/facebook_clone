import { Helmet } from "react-helmet"


const Meta = ({ title }) => {
  return (
    <>
        <Helmet>
            <title>{ title }</title>
            <link rel="shortcut icon" href="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" type="image/x-icon" />
        
        </Helmet>
    
    </>
  )
}

export default Meta;