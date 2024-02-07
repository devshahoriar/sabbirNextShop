import OutLIne from '@/components/shared/dashBoardComponents/OutLIne'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { cookies } from 'next/headers'

const page = () => {
  const cookie = cookies()
  console.log(cookie);
  return (
    <div className="md:m-10 mt-5 md:mt-10 flex flex-wrap md:gap-10 gap-4 flex-col items-center md:flex-row md:items-start">
      <CardItem title="Total products" description="3000 products" />
      <CardItem title="Total order" description="200 orders" />
      <CardItem title="Total user" description="300 users" />
    </div>
  )
}

const CardItem = ({ title, description }) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

export default page
