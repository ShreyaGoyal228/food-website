import { IProduct } from "@/components/shared/product-card";
import { create } from "zustand";
interface IProductDialog {
  isOpen: boolean;
  productDetail: IProduct;
  openDialog: (item: IProduct) => void;
  closeDialog: () => void;
}
const defaultProduct: IProduct = {
  item_id: 0,
  item_image: "",
  item_name: "",
  discounted_price: 0,
  original_price: 0,
  rating: 0,
  description: "",
};
const useProductDialogSore = create<IProductDialog>()((set) => {
  return {
    isOpen: false,
    productDetail: defaultProduct,
    openDialog: (item) =>
      set((state) => {
        console.log("Dialog is opening", item, state.isOpen);
        return {
          isOpen: true,
          productDetail: item,
        };
      }),
    closeDialog: () =>
      set(() => {
        return {
          isOpen: false,
          productDetail: defaultProduct,
        };
      }),
  };
});

export default useProductDialogSore;
