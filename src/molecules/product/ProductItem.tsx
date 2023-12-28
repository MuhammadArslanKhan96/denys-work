import { DeleteOutlined, EditOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { IProduct } from '@src/types'
import { Button, Card, Image, Rate, } from 'antd'

type ProductItemProps = {
    item: IProduct,
}

const ProductItem = (props: ProductItemProps) => {
    const { item } = props
    const { description, title, thumbnail, rating, price } = item
    const { Meta } = Card

    return (
        <div className="flex  flex-row p-[15px]  h-full">
            <Card
                hoverable
                className="w-[350px] h-[600px]"
                bordered={false}
                cover={
                    <Image
                        alt="latest product"
                        src={thumbnail}
                        className="w-[350px] h-[300px]"
                    />
                }
                actions={[
                    <EditOutlined key="setting" size={40} className="!w-[40px] ! h-full" />,
                    <ShoppingCartOutlined key="edit" size={40} className="w-[40px] h-full" />,
                    <DeleteOutlined key="ellipsis" size={40} className="w-[40px] h-full" />,
                ]}
            >
                <Meta
                    title={title}
                    description={description}
                    className="!leading-[25px] h-[120px]"
                />
                <p className="text-[20px] font-medium leading-[20px] !mt-[10px]">
                    Price ${price}
                </p>
                <div className="mt-[10px]">
                    <Rate defaultValue={rating} disabled />
                </div>
            </Card>
        </div >
    )
}

export default ProductItem