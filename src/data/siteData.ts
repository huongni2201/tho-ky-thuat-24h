import { ServiceItem, ProjectItem, FaqItem, DistrictCoverage, TrustPoint, ProcessStep } from "@/types";

const phoneDisplay = "0866.084.094";
const phoneRaw = phoneDisplay.replace(/\D/g, "");

export const SITE_CONFIG = {
  name: "DỊCH VỤ KỸ THUẬT 24H",
  legalName: "DỊCH VỤ KỸ THUẬT 24H",
  phoneDisplay,
  phoneRaw,
  zaloUrl: `https://zalo.me/${phoneRaw}`,
  domain: "dichvukythuat24h.vn",
  baseUrl: "https://www.dichvukythuat24h.vn",
  primaryAddress: "Tầng 2, D12 Giảng Võ, Ba Đình, Hà Nội",
  branches: [
    "Tầng 2, D12 Giảng Võ, Ba Đình, Hà Nội",
    "22 Thành Công, Ba Đình, Hà Nội",
    "89 Phạm Văn Đồng, Cầu Giấy, Hà Nội",
    "154 Nguyễn Trãi, Thanh Xuân, Hà Nội",
  ],
  workingHours: "7:00 - 22:00 (Cả Thứ 7, CN & Ngày lễ)",
  email: "dichvukythuat24h@gmail.com",
  serviceArea: "Toàn bộ 12 quận nội thành & các khu vực Hà Nội",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "khoan-tuong-treo-tranh",
    title: "Khoan Tường Treo Tranh",
    slug: "khoan-tuong-treo-tranh",
    image: "/images/service-art.webp",
    imageAlt: "Bộ tranh trang trí treo trên tường phòng khách",
    shortDesc: "Khoan định vị chuẩn xác, treo bộ tranh nghệ thuật, tranh canvas, tranh kính, đồng hồ treo tường phẳng đẹp.",
    description: "Dịch vụ khoan tường treo tranh chuyên nghiệp tại Hà Nội. Thợ có máy cân bằng laser định vị chính xác từng milimet, không làm nứt tường hay hỏng bề mặt sơn.",
    iconName: "Frame",
    popularItems: [
      "Bộ tranh treo phòng khách, phòng ngủ",
      "Tranh kính cường lực, tranh đính đá heavy-duty",
      "Đồng hồ decor kích thước lớn",
      "Bảng khen, tranh kỷ niệm gia đình"
    ],
    badge: "Phổ biến nhất"
  },
  {
    id: "treo-tivi-tuong",
    title: "Khoan Lắp Tivi Treo Tường",
    slug: "treo-tv-tuong",
    image: "/images/service-tv-installation.webp",
    imageAlt: "Hai thợ kỹ thuật đang lắp tivi màn hình phẳng lên giá treo tường",
    shortDesc: "Lắp đặt khung treo TV thẳng, nghiêng, xoay đa năng cho màn hình từ 32 inch đến 85 inch chắc chắn, thẩm mỹ.",
    description: "Thợ thi công khoan treo Tivi lên tường gạch, tường bê tông, tường ốp gỗ hoặc tường thạch cao có gia cố. Đi dây gọn gàng, đảm bảo an toàn tuyệt đối.",
    iconName: "Tv",
    popularItems: [
      "Treo TV màn hình phẳng 43 - 85 inch",
      "Lắp giá treo TV gật gù / xoay đa hướng",
      "Treo TV phòng ngủ, phòng khách, quán cafe",
      "Giấu dây nguồn & dây cáp tín hiệu"
    ],
    badge: "Chuyên nghiệp"
  },
  {
    id: "lap-gia-ke",
    title: "Khoan lắp giá kệ & ban thờ",
    slug: "lap-gia-ke",
    image: "/images/service-shelf.webp",
    imageAlt: "Kệ gỗ treo tường để sách và đồ trang trí",
    shortDesc: "Lắp đặt kệ sách, kệ gỗ âm tường, kệ gia vị bếp, kệ nhà tắm, giá treo đồ và ban thờ treo tường vững chắc.",
    description: "Sử dụng tắc kê kim loại hoặc tắc kê nhựa chịu lực phù hợp cho từng chất liệu tường. Cam kết giá kệ chịu tải tốt, không cong vênh lệch góc.",
    iconName: "LayoutGrid",
    popularItems: [
      "Kệ trang trí treo tường phòng khách",
      "Kệ sách gỗ, giá để đồ đa năng",
      "Lắp ban thờ treo tường phẳng chuẩn phong thủy",
      "Kệ gia vị inox phòng bếp & kệ inox nhà tắm"
    ],
    badge: "Chịu lực cao"
  },
  {
    id: "treo-guong-soi",
    title: "Treo Gương Trang Trí & Đèn",
    slug: "treo-guong",
    image: "/images/service-mirror.webp",
    imageAlt: "Gương tròn có đèn LED treo trên tường phòng tắm",
    shortDesc: "Lắp gương soi toàn thân, gương nhà tắm, gương LED thông minh an toàn, không nứt vỡ.",
    description: "Gương treo tường đòi hỏi độ chính xác cao và tắc kê chuyên dụng. Thợ dùng máy laser thủy cân bằng, khoan êm không bị mẻ gạch ốp nát.",
    iconName: "Maximize2",
    popularItems: [
      "Gương soi toàn thân phòng ngủ / bàn trang điểm",
      "Gương nhà tắm ốp gạch men",
      "Gương LED decor hiện đại",
      "Đèn vách, đèn trang trí treo tường"
    ],
  },
  {
    id: "treo-rem-cua",
    title: "Treo Rèm Cửa & Giàn Phơi",
    slug: "lap-rem-cua",
    image: "/images/service-curtains.webp",
    imageAlt: "Thanh treo rèm vải phía trên cửa sổ phòng khách",
    shortDesc: "Khoan bắt thanh treo rèm vải, rèm cuốn, rèm cầu vồng, lắp giàn phơi đồ thông minh tại chung cư, nhà phố.",
    description: "Lắp đặt rèm cửa đúng độ cao, căng phẳng thẩm mỹ. Nhận sửa chữa thanh treo rèm bị xô lệch, sụt tắc kê do dùng lâu năm.",
    iconName: "Sliders",
    popularItems: [
      "Thanh treo rèm vải phòng khách / phòng ngủ",
      "Rèm cầu vồng, rèm cuốn văn phòng",
      "Giàn phơi thông minh ban công chung cư",
      "Móc treo quần áo, cây treo đồ"
    ],
  },
  {
    id: "khoan-lap-thiet-bi",
    title: "Khoan Lắp Thiết Bị Gia Đình",
    image: "/images/service-home-installation.webp",
    imageAlt: "Thợ kỹ thuật lắp quạt điện treo tường tại nhà",
    shortDesc: "Khoan bắt bảng hiệu, bảng lịch công tác, máy sấy tay, hộp giấy, quạt treo tường và đồ trang trí.",
    description: "Tổng hợp các việc khoan vặt tại nhà. Thợ mang đầy đủ dụng cụ: máy khoan bê tông, máy khoan pin, thước nivo, các loại tắc kê & vít.",
    iconName: "Wrench",
    popularItems: [
      "Quạt treo tường, loa bluetooth vách",
      "Bảng công tác, bảng từ văn phòng",
      "Móc treo nhà tắm, hộp đựng giấy, vòi xịt",
      "Chân kệ máy giặt, giá đỡ điều hòa"
    ],
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: "Có Mặt Nhanh Tại Hà Nội",
    description: "Đội ngũ thợ túc trực tại các quận, có mặt nhanh sau 20-30 phút gọi.",
    iconName: "Clock"
  },
  {
    title: "Báo Giá Rõ Ràng Trước",
    description: "Khảo sát và báo giá minh bạch trước khi làm, không phát sinh chi phí phụ.",
    iconName: "DollarSign"
  },
  {
    title: "Thợ Kinh Nghiệm, Lành Nghề",
    description: "Kỹ thuật thao tác chuẩn xác, cân bằng thước laser, khoan chuẩn vị trí.",
    iconName: "ShieldCheck"
  },
  {
    title: "Thi Công Gọn Gàng Sạch Sẽ",
    description: "Hút bụi khi khoan, quét dọn sạch sẽ khu vực thi công trước khi nghiệm thu.",
    iconName: "Sparkles"
  },
  {
    title: "Máy Móc Chuyên Dụng Đầy Đủ",
    description: "Trang bị máy khoan bê tông, máy cân mực laser, tắc kê chịu lực cao.",
    iconName: "Cpu"
  },
  {
    title: "Bảo Hành Thi Công Vững Chắc",
    description: "Cam kết mối khoan chắc chắn, bảo hành kỹ thuật 6 - 12 tháng yên tâm.",
    iconName: "CheckCircle2"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Liên Hệ Khách Hàng",
    description: `Quý khách gọi Hotline ${SITE_CONFIG.phoneDisplay} hoặc nhắn qua Zalo báo khối lượng công việc và địa chỉ tại Hà Nội.`
  },
  {
    step: "02",
    title: "Tư Vấn & Báo Giá",
    description: "Thợ tư vấn phương án thi công (chọn tắc kê, vị trí khoan, loại khung) và báo giá minh bạch."
  },
  {
    step: "03",
    title: "Thợ Đến Tận Nơi",
    description: "Kỹ thuật viên di chuyển nhanh tới địa chỉ đăng ký đúng hẹn với đầy đủ máy móc dụng cụ."
  },
  {
    step: "04",
    title: "Thi Công Chuẩn Xác",
    description: "Đo đạc laser, tiến hành khoan lỗ, bắt tắc kê, gá lắp đồ cẩn thận, dọn dẹp bụi khoan."
  },
  {
    step: "05",
    title: "Nghiệm Thu & Thanh Toán",
    description: "Khách hàng kiểm tra độ chắc chắn, thẳng cân đối của đồ treo và thanh toán theo báo giá ban đầu."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Treo Bộ Tranh Decor Phòng Khách Chung Cư",
    category: "Khoan Treo Tranh",
    district: "Cầu Giấy, Hà Nội",
    image: "/images/gallery-art-wall.png",
    description: "Định vị laser 5 bức tranh phẳng tuyệt đối trên tường gạch nung phòng khách.",
    completionTime: "30 phút"
  },
  {
    id: "proj-2",
    title: "Khoan Treo Tivi 75 Inch Lên Tường Ốp Gỗ",
    category: "Treo Tivi",
    district: "Thanh Xuân, Hà Nội",
    image: "/images/gallery-tv-mount.png",
    description: "Lắp giá treo gật gù chịu lực, giấu toàn bộ dây nguồn và dây HDMI âm thẩm mỹ.",
    completionTime: "45 phút"
  },
  {
    id: "proj-3",
    title: "Lắp Kệ Gỗ & Kệ Tròn Trang Trí Âm Tường",
    category: "Lắp Giá Kệ",
    district: "Ba Đình, Hà Nội",
    image: "/images/gallery-wall-shelf.png",
    description: "Khoan tường bê tông bắt tắc kê sắt chịu tải lớn cho kệ gỗ để sách và cây cảnh decor.",
    completionTime: "40 phút"
  }
];

export const DISTRICTS: DistrictCoverage[] = [
  {
    name: "Ba Đình",
    subAreas: ["Giảng Võ", "Thành Công", "Kim Mã", "Đội Cấn", "Liễu Giai", "Cống Vị"],
    popular: true
  },
  {
    name: "Cầu Giấy",
    subAreas: ["Dịch Vọng", "Mai Dịch", "Nghĩa Tân", "Trung Hòa", "Yên Hòa", "Quan Hoa"],
    popular: true
  },
  {
    name: "Thanh Xuân",
    subAreas: ["Nguyễn Trãi", "Thanh Xuân Bắc", "Nhân Chính", "Khương Trung", "Kim Giang"],
    popular: true
  },
  {
    name: "Đống Đa",
    subAreas: ["Láng Hạ", "Xã Đàn", "Chùa Bộc", "Văn Miếu", "Ô Chợ Dừa", "Khâm Thiên"],
    popular: true
  },
  {
    name: "Hoàn Kiếm",
    subAreas: ["Tràng Tiền", "Lý Thường Kiệt", "Hàng Bông", "Phố Cổ", "Hàng Bài"],
    popular: true
  },
  {
    name: "Tây Hồ",
    subAreas: ["Thụy Khuê", "Quảng An", "Xuân La", "Nhật Tân", "Yên Phụ"],
    popular: true
  },
  {
    name: "Hai Bà Trưng",
    subAreas: ["Bạch Mai", "Minh Khai", "Trương Định", "Phố Huế", "Lê Thanh Nghị"],
    popular: true
  },
  {
    name: "Hoàng Mai",
    subAreas: ["Linh Đàm", "Định Công", "Tân Mai", "Giáp Bát", "Hoàng Văn Thụ"],
    popular: true
  },
  {
    name: "Hà Đông",
    subAreas: ["Văn Quán", "Mỗ Lao", "Quang Trung", "Vạn Phúc", "KĐT Thanh Hà"],
    popular: true
  },
  {
    name: "Nam Từ Liêm",
    subAreas: ["Mỹ Đình", "Mễ Trì", "Trung Văn", "Phú Đô", "Tây Mỗ"],
    popular: true
  },
  {
    name: "Bắc Từ Liêm",
    subAreas: ["Cổ Nhuế", "Xuân Đỉnh", "Phú Diễn", "Minh Khai"],
    popular: false
  },
  {
    name: "Long Biên",
    subAreas: ["Ngọc Lâm", "Việt Hưng", "Sài Đồng", "Bồ Đề"],
    popular: false
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Chi phí dịch vụ khoan tường treo tranh/TV được tính như thế nào?",
    answer: "Chi phí được báo công khai tùy theo khối lượng công việc: tính theo gói công việc (ví dụ: treo 1 Tivi, bộ tranh 3-5 bức) hoặc tính theo tổng số lỗ khoan nếu khoan vặt nhiều món. Thợ luôn báo giá chốt trước khi làm, cam kết không phát sinh."
  },
  {
    question: "Tường thạch cao hoặc tường bê tông mác cao thợ có khoan treo đồ được không?",
    answer: "Có. Thợ có sẵn máy khoan bê tông búa lớn cho tường bê tông chịu lực, và tắc kê bướm/tắc kê xoè chuyên dụng cho tường thạch cao. Thợ sẽ tư vấn giới hạn trọng lượng an toàn cho từng loại tường."
  },
  {
    question: "Thợ có sẵn tắc kê, ốc vít và giá treo TV không hay chủ nhà phải chuẩn bị?",
    answer: "Thợ luôn mang đầy đủ tắc kê nhựa, tắc kê sắt, ốc vít các cỡ, vít nở thạch cao. Nếu quý khách chưa có giá treo TV hoặc kệ, thợ có thể cung cấp sẵn các loại giá treo chuẩn xuất khẩu (thẳng, nghiêng, xoay) đúng kích thước TV."
  },
  {
    question: "Thời gian thợ có mặt sau khi đăng ký là bao lâu?",
    answer: "Với các quận nội thành Hà Nội (Ba Đình, Cầu Giấy, Thanh Xuân, Đống Đa, Hoàn Kiếm, Tây Hồ...), thợ có mặt nhanh trong vòng 20 - 30 phút sau khi quý khách gọi điện chốt lịch."
  },
  {
    question: "Dịch vụ có hỗ trợ làm vào buổi tối, cuối tuần hoặc ngày lễ không?",
    answer: "Có. Thợ phục vụ từ 7:00 sáng đến 22:00 đêm tất cả các ngày trong tuần (bao gồm cả Thứ 7, Chủ Nhật và các ngày lễ Tết) để thuận tiện cho thời gian rảnh của gia đình."
  },
  {
    question: "Thi công xong thợ có quét dọn và đảm bảo an toàn vệ sinh không?",
    answer: "Có. Thợ luôn dùng túi hứng bụi hoặc máy hút bụi cầm tay khi khoan, lau chùi sạch mảng bám trên tường và dọn dẹp sạch sẽ sàn nhà trước khi bàn giao cho quý khách."
  }
];
