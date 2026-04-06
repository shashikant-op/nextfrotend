import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Categoryfilter() {
  const router = useRouter();

  const loaderimglink =
    "https://thumbs.dreamstime.com/b/professional-movers-moving-armchair-loader-carry-new-furniture-men-workers-holding-chair-males-uniform-delivery-240505064.jpg";

  const categories = {
    bed: "https://images.woodenstreet.de/image/cache/data/bed-with-storage/adolph-bed-with-side-storage/revised/revised/walnut/updated/WALNUT-KS-NEW/9-750x650.jpg",
    masterbed:
      "https://studioseg.me/wp-content/uploads/2023/12/Master-Bedroom-Interior-Design.jpg",
    chair:
      "https://tse1.mm.bing.net/th/id/OIP.nM95v_vGolSoaL-TqVh1RQHaMK?pid=Api&P=0&h=180",
    diningchair:
      "https://i5.walmartimages.com/asr/911452d7-8804-4281-9c21-5070802a5ddf_2.ee135cbcbd3d020381a26f1cbcbc28ef.jpeg",
    centertable:
      "https://tse3.mm.bing.net/th/id/OIP.ryxkLB0B32IV3CNKfs1RKgHaFj?pid=Api&P=0&h=180",
    diningtable:
      "https://i.pinimg.com/originals/27/aa/75/27aa75249625dd0f27bf085409a26df8.jpg",
    sofaset:
      "https://tse4.mm.bing.net/th/id/OIP.lE0w4GyS5652CrGG33fX_AHaGa?pid=Api&P=0&h=180",
    dressingtable:
      "https://images.woodenstreet.de/image/data/dressing-tables/edvin-engineered-wood-dressing-table-with-storage-drawers-and-shelves-exotic-teak-finish/exotic-teak-finish/1.jpg",
    wardrobe:
      "https://tse3.mm.bing.net/th/id/OIP.ddMY2htstjMRG7Gu3oj08wHaFt?pid=Api&P=0&h=180",
    table:
      "https://cdn.shopify.com/s/files/1/2108/6923/products/VenueStudyTable8.3.jpg?v=1672935544",
    officetable:
      "https://tse3.mm.bing.net/th/id/OIP.fYcuCGdEkVhKqcSKeIhfdAHaGa?pid=Api&P=0&h=180",
    others: "",
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (catKey) => {
    setSelectedCategory(catKey);
    router.push(`/catproduct?category=${catKey}`);
  };

  return (
    <div>
      {/* Mobile Scroll */}
      <div className="p-2 py-1 lg:hidden flex w-full items-center gap-1 overflow-x-scroll scroll-smooth scrollbar-hide">
        {Object.entries(categories).map(([catKey, catImg]) => {
          const isActive = selectedCategory === catKey;

          return (
            <div
              key={catKey}
              onClick={() => handleCategoryClick(catKey)}
              className="flex flex-col items-center p-2 cursor-pointer flex-shrink-0"
            >
              <div
                className={`w-16 h-16 rounded-full overflow-hidden mb-2 border-2 transition-all duration-200 ${
                  isActive
                    ? "border-blue-500 scale-110"
                    : "border-transparent"
                }`}
              >
                <img
                  src={catImg || loaderimglink}
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

      {/* Desktop Sidebar */}
      <div className="bg-white p-6 w-80 h-193 hidden lg:flex flex-col border border-slate-100 shadow-sm">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">
          Categories
        </h3>

        <div className="flex flex-row overflow-scroll scrollbar-hide gap-3 lg:flex-col">
          {Object.entries(categories).map(([catKey, catImg]) => {
            const isActive = selectedCategory === catKey;

            return (
              <div
                key={catKey}
                onClick={() => handleCategoryClick(catKey)}
                className="flex flex-row gap-5 items-center p-2 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-[12px] overflow-hidden mb-2 border-2 transition-all duration-200 ${
                    isActive
                      ? "border-blue-500 scale-110"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={catImg || loaderimglink}
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
      </div>
    </div>
  );
}