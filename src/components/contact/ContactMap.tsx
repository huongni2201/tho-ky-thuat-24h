export default function ContactMap() {
  const mapEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.113264627255!2d105.82171931538962!3d21.028511993175806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab88b0f80879%3A0xb3a8264e1c28c89f!2sD12%20Gi%E1%BA%A3ng%20V%C3%B5%2C%20Gi%E1%BA%A3ng%20V%C3%B5%2C%20Ba%20%C4%90%C3%ACnh%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2svn!4v1689000000000!5m2!1svi!2svn";

  return (
    <div className="space-y-3 pt-2">
      <div className="border-b border-slate-200 pb-2">
        <h2 className="text-lg font-extrabold text-slate-900">
          Bản Đồ Vị Trí
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
          Vị trí văn phòng trung tâm tiếp nhận thông tin khách hàng tại Hà Nội:
        </p>
      </div>

      <div className="w-full aspect-[16/7] min-h-[240px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
        <iframe
          title="Bản đồ vị trí dịch vụ Thợ Kỹ Thuật 24h tại Hà Nội"
          src={mapEmbedSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
