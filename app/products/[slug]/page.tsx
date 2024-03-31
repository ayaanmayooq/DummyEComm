import { Gallery } from "@/components/gallery";
import { ProductInfo } from "@/components/product-info";
import { getSingleProduct } from "@/lib/data"
import { Product } from "@/lib/schema";

interface Props {
    params: {
        slug: string
    }
}

export default async function ProductPage({ params }: Props) {
    const product: Product = await getSingleProduct(params.slug);

    return (
        <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
            <Gallery product={product} />
            <ProductInfo product={product} />
          </div>
        </div>
      </main>
    )
}