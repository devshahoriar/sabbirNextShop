import DadcboardContainer from '@/components/shared/dashBoardComponents/DadcboardContainer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const page = () => {
  return (
    <DadcboardContainer>
      <div className="flex flex-wrap md:gap-6 gap-4 flex-col items-center md:flex-row md:items-start px-3 md:px-0">
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
