import { IProduct } from "@src/types";
import axios from "@src/utils/axios";
import { Input, Typography, message, Empty } from "antd";
import { useCallback, useEffect, useState } from "react";
import { ProductItem } from ".";
import { Splash } from "@src/compoenents";

function Product() {
    const [loading, setLoading] = useState(false);
    const [allProducts, setAllProducts] = useState<IProduct[]>();
    const [filteredProducts, setFilteredProducts] = useState<IProduct[] | undefined>();
    // the function is retrived data
    const getData = useCallback(async () => {
        setLoading(true);
        try {
            const data = await axios.get("/products");
            setAllProducts(data.data.products);
        } catch (error: any) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = (value: string) => {
        if (!value.trim()) {
            setFilteredProducts(undefined);
        } else {
            const filtered = allProducts?.filter((product) =>
                product.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <div>
            <Typography.Title className="flex justify-center text-center mt-2">Products Dashboard</Typography.Title>
            <div className="flex justify-center items-center">
                <Input.Search
                    placeholder="Enter the product name..."
                    enterButton
                    className="w-[84%]"
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            {loading ? (
                <Splash />
            ) : (
                <div className="flex justify-center flex-wrap mt-5">
                    {(filteredProducts || allProducts)?.map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                    {(!filteredProducts || filteredProducts.length === 0) && (
                        <Empty description="No products found" />
                    )}
                </div>
            )}
        </div>
    );
}

export default Product;
