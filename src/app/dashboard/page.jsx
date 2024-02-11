import DadcboardContainer from '@/components/shared/dashBoardComponents/DadcboardContainer'
import OutLIne from '@/components/shared/dashBoardComponents/OutLIne'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { headers } from 'next/headers'

const page = () => {
  const h = headers()
  console.log(h.get('admin_email'));
  return (
    <DadcboardContainer>
      <div className="flex flex-wrap md:gap-10 gap-4 flex-col items-center md:flex-row md:items-start px-3 md:px-0">
        <CardItem title="Total products" description="3000 products" />
        <CardItem title="Total order" description="200 orders" />
        <CardItem title="Total user" description="300 users" />
      </div>
    </DadcboardContainer>
  )
}

const CardItem = ({ title, description }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
export const metadata = {
  title: 'Dashboard | Admin',
}
export default page
