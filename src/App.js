import './App.css';
import PriceCard from './Pricecard.js'

let data=[
  {
    plan:"Free",
    price:"0",
    user:"Single User",
    userEnabler:true,
    storage:"5GB",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    access:"Community Access",
    accessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subDomain:"Free subdomain",
    subDomainEnabler:false,
    statusReport:"Monthly Satus Report",
    statusReportEnabler:false,
  },
  {
    plan:"Plus",
    price:"9",
    user:"5 User",
    userEnabler:true,
    storage:"50GB",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    access:"Community Access",
    accessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Free subdomain",
    subDomainEnabler:true,
    statusReport:"Monthly Satus Report",
    statusReportEnabler:false,
  },
  {
    plan:"Pro",
    price:"49",
    user:"Unlimited User",
    userEnabler:true,
    storage:"150GB",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    access:"community Access",
    accessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Unlimited Free subdomain",
    subDomainEnabler:true,
    statusReport:"Monthly Satus Report",
    statusReportEnabler:true,
  } 
]

function App() {
  return <>
   <section className="pricing py-5">
  <div className="container">
    <div className="row">
       <PriceCard data={data[0]}/>
       <PriceCard data={data[1]}/>
       <PriceCard data={data[2]}/>
      </div>
  </div>
</section>
  </>
}

export default App;