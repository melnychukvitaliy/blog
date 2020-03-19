export type TTalk = {
  title: string;
  description: string;
  url: string;
  date: Date;
}

export const talks = [
  {
    title: "Deployment process as Code",
    description: "It started when we decided to move on with k8s cluster. We have changed and reconsidered in infrastructure a lot since September. And now, we have different level of managing servers and how we handle every day deployments.",
    date: new Date("5 Mar 2020"),
    url: "static/pdf/deployment-process-as-code.pdf"
  },
  {
    title: "30ms. How much does it cost?",
    description: "When we are working on the infrastructure especially on the network performance. We are facing with issue that is not clear from the first view. Here is my small talk how we've found network performance issue between our clusters that were hosted in different regions.",
    date: new Date("14 Feb 2020"),
    url: "static/pdf/30ms_how-much-does-it-cost.pdf"
  },
  {
    title: "Elasticsearch: Controlling relevance",
    description: "Over the last year, our team has been working to find and deliver relevant results. We use Elasticsearch, search in 15TB cluster and handle up to 20000 requests/sec. Here is my talk slides about how full text search works, what is relevant, and how to build your scoring function.",
    date: new Date("June 8 2019"),
    url: "static/pdf/elasticsearch-controlling-relevance.pdf"
  }
] as TTalk[]
