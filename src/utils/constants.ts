import Images from "assets/images"
import { ImagePickerResponse } from "react-native-image-picker";

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePickerResponse.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const includeExtra = true;

export const AuctionStatus = {
    ComingAuction: 1000002,
    GoingAuction: 1000003,
    EndAuction: 1000004,
}

export const AuctionPropertyCategory = [
  {id: 1000070, name:'Tài sản nhà nước', image: Images.TAI_SAN_NHA_NUOC_IMAGE},
  {id: 1000071, name:'Bất động sản', image: Images.LAND_IMAGE},
  {id: 1000072, name:'Phương tiện xe cộ', image: Images.XE_CO_IMAGE},
  {id: 1000073, name:'Sưu tầm nghệ thuật', image: Images.NGHE_THUAT_IMAGE},
  {id: 1000074, name:'Hàng hiệu xa xỉ', image: Images.HANG_HIEU_XA_XI_IMAGE},
  {id: 1000075, name:'Tang vật bị tịch thu', image: Images.TANG_VAT_TICH_THU_IMAGE},
  {id: 1000076, name:'Tài sản khác', image: Images.TAI_SAN_KHAC_IMAGE},
]

export const AuctionPropertyStatus = {
    Coming: {id: 1000002, name:'Sắp diễn ra'},
    OnGoing: {id: 1000001, name:'Đang diễn ra'},
    End: {id: 1000004, name:'Đã kết thúc'},
}

export const ListGender = [
  {id: 1, key: 'male', name: 'Nam'},
  {id: 2, key: 'female', name: 'Nữ'},
  {id: 3, key: 'other', name: 'Khác'},
]

export const AuctionPartner = [
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-1.png'},
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-7.png'},
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-8.png'},
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-13.png'},
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-11.png'},
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-4.png'},
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-5.png'},
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-6.png'},
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-9.png'},
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-3.png'},
  {image: 'https://lacvietauction.vn/LVT/assets/images/bg/client-10.png'},
]

export const accountTypeList = [
  { label: 'Cá nhân', id: 0},
  { label: 'Tổ chức', id: 1},
]

export const actionsImage: Action[] = [
  // {
  //   title: 'Chụp ảnh mới',
  //   type: 'capture',
  //   options: {
  //     mediaType: 'photo',
  //     includeExtra,
  //   },
  // },
  {
    title: 'Chọn ảnh trong thư viện',
    type: 'library',
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeExtra,
    },
  },
];
