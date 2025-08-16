import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Categoryfilter() {
  const router = useRouter();
const loaderimglink="https://thumbs.dreamstime.com/b/professional-movers-moving-armchair-loader-carry-new-furniture-men-workers-holding-chair-males-uniform-delivery-240505064.jpg";
  const categories = {
    boxbed: "https://1.bp.blogspot.com/-d5R9mWlNy6E/XkFHwJTGU1I/AAAAAAAACJk/B0P68_zczuwvrvYlIB6v5ki6t40d6MVBQCLcBGAsYHQ/s1600/IMG_9411.JPG",
    bed: "https://mysleepyhead.com/media/catalog/product/q/u/queen_size_wooden_bed_1.jpg",
    masterbed: "https://studioseg.me/wp-content/uploads/2023/12/Master-Bedroom-Interior-Design.jpg",
    chair: "https://tse1.mm.bing.net/th/id/OIP.nM95v_vGolSoaL-TqVh1RQHaMK?pid=Api&P=0&h=180",
    diningchair: "https://i5.walmartimages.com/asr/911452d7-8804-4281-9c21-5070802a5ddf_2.ee135cbcbd3d020381a26f1cbcbc28ef.jpeg",
    centertable: "https://tse3.mm.bing.net/th/id/OIP.ryxkLB0B32IV3CNKfs1RKgHaFj?pid=Api&P=0&h=180",
    diningtable: "https://i.pinimg.com/originals/27/aa/75/27aa75249625dd0f27bf085409a26df8.jpg",
    sofaset: "https://tse4.mm.bing.net/th/id/OIP.lE0w4GyS5652CrGG33fX_AHaGa?pid=Api&P=0&h=180",
    dressingtable: "https://images.woodenstreet.de/image/data/dressing-tables/edvin-engineered-wood-dressing-table-with-storage-drawers-and-shelves-exotic-teak-finish/exotic-teak-finish/1.jpg",
    wardrobe: "https://tse3.mm.bing.net/th/id/OIP.ddMY2htstjMRG7Gu3oj08wHaFt?pid=Api&P=0&h=180",
    table: "https://cdn.shopify.com/s/files/1/2108/6923/products/VenueStudyTable8.3.jpg?v=1672935544",
    sidetable: "https://i2.wp.com/i5.walmartimages.com/asr/28efcbc9-86ae-40f9-a400-b8b5c8edecab_1.c70be02409aabdc774c1f069c2481916.jpeg",
    bookshelf: "https://tse1.mm.bing.net/th/id/OIP.MMm40SqQVrGvl2Nn5SnfrwHaHa?pid=Api&P=0&h=180",
    TVunit: "https://5.imimg.com/data5/SELLER/Default/2021/2/ZC/HH/NL/123457961/designer-wooden-tv-unit.jpg",
    officetable: "https://tse3.mm.bing.net/th/id/OIP.fYcuCGdEkVhKqcSKeIhfdAHaGa?pid=Api&P=0&h=180",
    kidsfurniture: "https://tse3.mm.bing.net/th/id/OIP.0TAa6zaZYd1H4GvP56QgGQHaGa?pid=Api&P=0&h=180",
    storage: "https://i5.walmartimages.com/asr/3c3c8aaf-cc9b-40b2-aa11-34eeacee135f.73eed5311536a9e5fa1a4047604e043f.jpeg",
    others: ""
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (catKey) => {
    setSelectedCategory(catKey);
    router.push(`/catproduct?category=${catKey}`);
  };

  return (
    <div className="p-2 py-1 flex w-full items-center gap-1 overflow-x-scroll scroll-smooth scrollbar-hide flex-row">
      {Object.entries(categories).map(([catKey, catImg], index) => {
        const isActive = selectedCategory === catKey;
        return (
          <div
            key={catKey}
            onClick={() => handleCategoryClick(catKey)}
            className="flex flex-col items-center p-2 cursor-pointer"
          >
            <div
              className={`w-16 h-16 rounded-full overflow-hidden mb-2 border-2 transition-all duration-200 ${
                isActive ? "border-blue-500 scale-110" : "border-transparent"
              }`}
            >
              <img
                src={catImg || (catImg = loaderimglink)}
                alt={catKey}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-sm font-semibold capitalize">
              {catKey.replace("_", " ")}
            </span>
          </div>
        );
      })}
    </div>
  );
}



