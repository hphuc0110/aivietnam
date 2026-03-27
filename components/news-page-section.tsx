'use client'

import { useState } from 'react'
import Image from 'next/image'

type NewsArticle = {
  id: string
  title: string
  date: string
  category: string
  thumbnail: string
  excerpt: string
  paragraphs: string[]
}

const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'nvidia-ha-tang-ai-toan-cau',
    title: 'NVIDIA ĐANG NẮM GIỮ VAI TRÒ TRUNG TÂM TRONG HẠ TẦNG AI TOÀN CẦU',
    date: '27/03/2026',
    category: 'Hạ tầng AI',
    thumbnail: '/news/bai1.png',
    excerpt:
      'Trong kỷ nguyên AI bùng nổ, lợi thế công nghệ không còn nằm ở việc ai sở hữu thuật toán tốt hơn, mà ở khả năng triển khai AI ở quy mô lớn, ổn định và hiệu quả. Khi trí tuệ nhân tạo dần trở thành hạ tầng nền tảng của kinh tế số, NVIDIA - từ một nhà sản xuất GPU - đang nổi lên như điểm nút trung tâm trong hệ sinh thái AI toàn cầu, với ảnh hưởng trải dài từ trung tâm dữ liệu, phần mềm nền tảng đến các chiến lược AI cấp quốc gia, trong đó có Việt Nam.',
    paragraphs: [
      'Sức mạnh thị trường của NVIDIA trong hạ tầng phần cứng AI: Để các mô hình AI hiện đại có thể học, suy luận và phục vụ hàng triệu người dùng, hạ tầng tính toán đóng vai trò then chốt. Trong bối cảnh đó, GPU với khả năng xử lý song song khối lượng lớn phép tính - đã trở thành thành phần cốt lõi của các trung tâm dữ liệu phục vụ AI.',
      'Trong phân khúc GPU dành cho trung tâm dữ liệu, vốn là nền tảng hạ tầng của AI doanh nghiệp, NVIDIA hiện chiếm tỷ trọng rất lớn. Theo các báo cáo thị trường độc lập, tính đến đầu năm 2024, NVIDIA nắm giữ khoảng 92% thị phần GPU trong các trung tâm dữ liệu phục vụ huấn luyện và suy luận AI. Con số này cho thấy mức độ phổ biến của công nghệ NVIDIA trong các hệ thống AI quy mô lớn đang được triển khai trên toàn cầu.',
      'Quan trọng hơn, lợi thế của NVIDIA không chỉ thể hiện ở số lượng thiết bị được bán ra, mà còn ở việc nền tảng của họ đang được nhiều doanh nghiệp và nhà cung cấp dịch vụ đám mây lựa chọn như một chuẩn triển khai hạ tầng AI. Khi phần lớn hệ thống được xây dựng xoay quanh cùng một kiến trúc và hệ sinh thái, tính đồng bộ và hiệu quả vận hành trở thành yếu tố thúc đẩy sự lựa chọn đó tiếp tục được duy trì.',
      'CUDA - chuẩn phần mềm gắn chặt với GPU NVIDIA: Một yếu tố then chốt giúp NVIDIA giữ vai trò trung tâm trong hạ tầng AI là CUDA - nền tảng phần mềm cho phép khai thác tối đa sức mạnh GPU trong huấn luyện và triển khai mô hình. CUDA không chỉ là một công cụ lập trình, mà đã trở thành lớp hạ tầng phần mềm mà phần lớn các framework AI phổ biến như PyTorch hay TensorFlow được tối ưu hóa để đạt hiệu năng cao nhất.',
      'Khi một nền tảng phần mềm được chấp nhận rộng rãi như một "chuẩn thực tế" của ngành, chi phí chuyển đổi sang hệ sinh thái khác trở nên rất lớn, không chỉ về tài chính mà còn về nhân lực, kiến thức kỹ thuật và quy trình vận hành. Điều này giúp NVIDIA không chỉ cung cấp phần cứng, mà còn cung cấp khả năng triển khai AI hiệu quả ở quy mô lớn - yếu tố then chốt trong giai đoạn AI đi vào ứng dụng thực tiễn.',
      'Chứng chỉ NVIDIA: chuẩn năng lực gắn với hạ tầng AI thực tế. Song song với việc kiểm soát hạ tầng công nghệ, NVIDIA cũng từng bước chuẩn hóa nguồn nhân lực AI thông qua hệ thống chứng chỉ chuyên môn. Các chứng chỉ NVIDIA không tập trung vào lý thuyết thuật toán thuần túy, mà đánh giá năng lực triển khai AI trên hạ tầng thực tế - từ lập trình GPU, tối ưu mô hình, vận hành hệ thống AI cho đến triển khai trong môi trường trung tâm dữ liệu và điện toán đám mây. Nhờ gắn chặt với nền tảng CUDA và kiến trúc GPU NVIDIA, các chứng chỉ này đang được nhiều doanh nghiệp công nghệ, trung tâm dữ liệu và nhà cung cấp dịch vụ AI xem như một tiêu chuẩn tham chiếu về kỹ năng thực hành. Trong bối cảnh AI ngày càng đi vào sản xuất và kinh doanh, việc sở hữu chứng chỉ NVIDIA không chỉ phản ánh kiến thức cá nhân, mà còn cho thấy khả năng làm việc trực tiếp với hạ tầng AI đang được sử dụng phổ biến nhất hiện nay.',
      'Hợp tác quốc gia: AI như một hạ tầng chiến lược. Vai trò của NVIDIA trong hạ tầng AI toàn cầu thể hiện rõ qua các chương trình hợp tác quốc gia quy mô lớn. Tại Hàn Quốc, NVIDIA cùng chính phủ và các tập đoàn công nghệ đang tham gia xây dựng hạ tầng AI quốc gia với tổng quy mô dự kiến hơn 260.000 GPU.',
      'Trong đó, hơn 50.000 GPU được triển khai tại Trung tâm Tính toán AI Quốc gia và nền tảng đám mây quốc gia. Các tập đoàn lớn như Samsung, SK Group và Hyundai mỗi bên dự kiến vận hành khoảng 50.000 GPU trong các "AI factory" - mô hình tích hợp AI trực tiếp vào nghiên cứu, sản xuất và phát triển sản phẩm. Riêng NAVER Cloud dự kiến triển khai trên 60.000 GPU để phục vụ doanh nghiệp và các mô hình AI nền tảng trong nước.',
      'Những dự án này cho thấy AI đang được các quốc gia tiếp cận như một dạng hạ tầng chiến lược, tương tự năng lượng hay viễn thông, thay vì chỉ là lĩnh vực nghiên cứu công nghệ.',
      'Việt Nam trong chiến lược mở rộng của NVIDIA: Tại Đông Nam Á, Việt Nam đang nổi lên như một điểm đến quan trọng trong chiến lược AI của NVIDIA. Tháng 12/2024, NVIDIA công bố kế hoạch mở Trung tâm Nghiên cứu và Phát triển AI tại Việt Nam - trung tâm R&D đầu tiên của hãng trong khu vực, tập trung vào phát triển phần mềm AI và hợp tác với hệ sinh thái trong nước.',
      'Song song đó, NVIDIA triển khai chương trình Inception hỗ trợ hơn 100 startup AI Việt Nam, đồng thời hợp tác đào tạo với khoảng 65 trường đại học và cơ sở giáo dục nhằm phát triển nguồn nhân lực AI. Trước đó, NVIDIA và FPT cũng ký kết thỏa thuận xây dựng nhà máy AI trị giá khoảng 200 triệu USD, sử dụng GPU và nền tảng phần mềm NVIDIA để phục vụ các ứng dụng AI đa ngành.',
      'Những hoạt động này cho thấy Việt Nam không chỉ là thị trường tiêu thụ công nghệ, mà đang được định vị như một mắt xích trong hệ sinh thái AI khu vực.',
      'Lợi thế hạ tầng - nền tảng quyền lực AI của NVIDIA: Khác với nhiều nhà sản xuất chip truyền thống, NVIDIA đang xây dựng một hệ sinh thái AI khép kín, bao gồm phần cứng GPU hiệu năng cao, nền tảng phần mềm phát triển, công cụ triển khai ở quy mô lớn và mạng lưới đối tác toàn cầu từ doanh nghiệp đến chính phủ.',
      'Cách tiếp cận này tạo ra hiệu ứng tích lũy: càng nhiều tổ chức triển khai AI trên nền tảng NVIDIA, cộng đồng kỹ sư và tài nguyên hỗ trợ càng mở rộng, khiến hệ sinh thái ngày càng khó thay thế trong ngắn hạn.',
      'Trong kỷ nguyên AI hiện nay, thuật toán ngày càng được phổ biến rộng rãi, nhưng khả năng đưa các mô hình đó vào vận hành ổn định, an toàn và hiệu quả ở quy mô lớn mới là yếu tố quyết định lợi thế dài hạn.',
      'Với vai trò trung tâm trong hạ tầng GPU trung tâm dữ liệu, hệ sinh thái CUDA được chấp nhận rộng rãi và các chương trình hợp tác quốc gia quy mô lớn, NVIDIA đang giữ vị trí then chốt trong cách AI được triển khai trên toàn cầu. Đây không chỉ là lợi thế công nghệ, mà là lợi thế hạ tầng - yếu tố ngày càng mang tính quyết định trong cuộc đua AI.',
    ],
  },
  {
    id: 'xu-huong-llm-doanh-nghiep-2026',
    title: 'CHỨNG CHỈ NVIDIA: TỪ "LỰA CHỌN THÊM ĐẾN "YÊU CẦU BẮT BUỘC" CHO KỸ SƯ AI',
    date: '20/03/2026',
    category: 'Chứng chỉ NVIDIA',
    thumbnail: '/news/bai2.png',
    excerpt:
      'Cách đây 5 năm, thuật toán là vua, nhưng trong kỷ nguyên GenAI "đốt tiền" qua từng phép tính, cuộc chơi đã thay đổi. Khả năng tối ưu hạ tầng - được bảo chứng bởi chứng chỉ NVIDIA - đang chuyển từ "có thì tốt" sang yêu cầu bắt buộc.',
    paragraphs: [
      'Lợi thế của "software-first" không còn đủ cho AI hiện đại: Trong thập kỷ trước, tư duy đặt phần mềm làm trung tâm từng chi phối ngành công nghệ. Kỹ sư AI chủ yếu tập trung vào thuật toán và mô hình dữ liệu, còn phần cứng thường được xem là lớp nền mặc định hoặc giao cho đội hạ tầng.',
      'Trong bối cảnh đó, các chứng chỉ chuyên sâu của NVIDIA chỉ được xem như lựa chọn cho một nhóm kỹ sư hẹp. Việc học CUDA hay kiến trúc GPU từng bị coi là không cần thiết với đa số kỹ sư AI. Giai đoạn phần cứng là yếu tố thứ yếu nay đã khép lại.',
      'GenAI và bài toán chi phí tính toán: Khi huấn luyện và vận hành mô hình lớn, GPU là tài nguyên đắt đỏ nhất. Pipeline thiếu tối ưu không chỉ chậm mà còn làm chi phí điện toán tăng trực tiếp theo thời gian chạy.',
      'Doanh nghiệp hiện không tìm người chỉ "chạy được mô hình", mà tìm người làm mô hình chạy hiệu quả. Chứng chỉ NVIDIA vì thế trở thành tín hiệu năng lực triển khai AI trên GPU thực tế: giảm độ trễ, giảm bộ nhớ, tăng mức sử dụng GPU và loại bỏ điểm nghẽn.',
      'Nói ngắn gọn, chứng chỉ NVIDIA phản ánh tư duy cost per token. Với doanh nghiệp, kỹ sư có năng lực này có thể biến hệ thống AI từ "cỗ máy đốt tiền" thành nền tảng vận hành bền vững.',
      'Vì sao AI Infrastructure ngày càng được săn đón? Thị trường đang thừa người biết AI nhưng thiếu người vận hành AI ở quy mô lớn. Doanh nghiệp cần kỹ sư triển khai trên hàng trăm đến hàng nghìn GPU với yêu cầu ổn định, mở rộng và tối ưu chi phí.',
      'Khoảng trống này làm tăng nhu cầu AI Infrastructure Engineer - những người hiểu GPU, container, orchestration và vận hành production. Chứng chỉ NVIDIA được thiết kế để lấp đầy khoảng trống bằng các kỹ năng triển khai thực tế mà giáo trình truyền thống chưa theo kịp.',
      'Sở hữu chứng chỉ NVIDIA giúp ứng viên định vị vào nhóm nhân sự hạ tầng AI đang được săn đón và có đãi ngộ cao hơn mặt bằng chung. Thông điệp gửi tới nhà tuyển dụng: không chỉ xây mô hình, mà còn vận hành được hệ thống.',
      'Chuẩn bị cho giai đoạn công nghiệp hóa AI: Việc chứng chỉ NVIDIA chuyển từ nice-to-have sang must-have không phải trào lưu ngắn hạn, mà là tiến hóa tự nhiên khi AI đi vào vận hành như AI factory - nơi mọi thứ phải đo lường, chuẩn hóa và tối ưu chi phí.',
      'Thông điệp cho kỹ sư công nghệ là rõ ràng: đừng chờ đến khi JD yêu cầu mới bắt đầu học. Chuẩn kỹ năng đang dịch chuyển theo hạ tầng, và làm chủ kiến thức hạ tầng được chuẩn hóa qua chứng chỉ NVIDIA là cách để không bị tụt lại trong kỷ nguyên AI mới.',
    ],
  },
  {
    id: 'dao-tao-ai-thuc-hanh-cho-doanh-nghiep',
    title: 'ASSOCIATE HAY PROFESSIONAL: PHÂN BIỆT HAI CẤP ĐỘ CHỨNG CHỈ NVIDIA TRONG THỰC TẾ CÔNG VIỆC',
    date: '27/03/2026',
    category: 'Lộ trình chứng chỉ',
    thumbnail: '/news/bai3.png',
    excerpt:
      'NVIDIA Certification đang là tín hiệu kỹ năng quan trọng trong làn sóng AI, nhưng Associate và Professional không phải lộ trình thẳng. Chúng đại diện cho hai loại công việc khác nhau: hiểu - phối hợp - ra quyết định và triển khai - vận hành - chịu trách nhiệm kỹ thuật.',
    paragraphs: [
      'Điểm mấu chốt: chứng chỉ không đo bạn biết AI đến đâu, mà đo bạn làm AI ở tầng nào. Doanh nghiệp không dừng ở demo, mà quan tâm hệ thống có chạy ổn định khi tăng tải, chi phí GPU có kiểm soát được hay không, và khi có sự cố có khôi phục kịp thời hay không.',
      'Associate dành cho những người cần hiểu AI để làm việc đúng. Đây không phải chứng chỉ "thấp", mà là cấp độ phù hợp cho các vai trò quản lý dự án, tư vấn giải pháp, kinh doanh/marketing công nghệ, sinh viên và kỹ sư mới cần nền tảng chắc.',
      'Giá trị lớn nhất của Associate nằm ở năng lực nhìn đúng bài toán và đặt AI vào đúng chỗ: hiểu khi nào nên dùng GenAI, RAG hay fine-tuning, đồng thời phối hợp hiệu quả với đội kỹ thuật để tránh quyết định sai do hiểu nhầm công nghệ.',
      'Giới hạn của Associate cũng rõ ràng: không yêu cầu cấu hình hạ tầng, tối ưu bộ nhớ GPU, xử lý lỗi suy luận hay thiết kế pipeline production. Nếu công việc của bạn là ra quyết định, lập kế hoạch và phối hợp, Associate là bản đồ phù hợp.',
      'Professional dành cho những người triển khai và chịu trách nhiệm hệ thống. Ở cấp này, câu hỏi không còn là "AI là gì" mà là "AI phải chạy thế nào để hiệu quả và bền vững".',
      'Nhóm phù hợp với Professional gồm kỹ sư AI/ML, Data Scientist theo hướng sản phẩm, MLOps, DevOps, Platform Engineer và Solution Architect chịu trách nhiệm thiết kế, triển khai, vận hành.',
      'Năng lực lõi của Professional là triển khai, tối ưu và vận hành: huấn luyện/tinh chỉnh trên nhiều GPU, tối ưu inference để giảm độ trễ và chi phí, triển khai dịch vụ có giám sát - cập nhật - khôi phục khi sự cố xảy ra.',
      'Khác biệt lớn nhất là cách đánh giá: Professional không kiểm tra bạn đã học gì, mà kiểm tra bạn xử lý tình huống thực tế ra sao. Trong production, sự cố là điều chắc chắn xảy ra và bạn phải đưa hệ thống về trạng thái ổn định.',
      'Cách tự định vị nhanh: nếu công việc của bạn xoay quanh yêu cầu, phạm vi dự án, phối hợp liên nhóm và tư vấn giải pháp, bạn gần với Associate. Nếu xoay quanh runtime, hạ tầng GPU, hiệu năng và độ ổn định, bạn gần với Professional.',
      'Lời khuyên thực tế: đừng chọn chứng chỉ theo danh xưng, hãy chọn theo công việc. Associate và Professional không phải nấc thang thấp - cao, mà là hai vai trò khác nhau trong cùng hệ sinh thái AI.',
    ],
  },
]

export function NewsPageSection() {
  const [openArticleId, setOpenArticleId] = useState<string | null>(null)
  const selectedArticle = NEWS_ARTICLES.find((article) => article.id === openArticleId) ?? null

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">Trung tâm Tin tức</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            Chọn một bài viết để xem nội dung chi tiết. Thumbnail sẽ được cập nhật sau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {NEWS_ARTICLES.map((article) => {
            const isActive = openArticleId === article.id
            return (
              <button
                key={article.id}
                type="button"
                onClick={() => setOpenArticleId((prev) => (prev === article.id ? null : article.id))}
                className={`rounded-xl border p-4 text-left transition ${
                  isActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200 mb-4">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                  {article.title}
                </h2>
              </button>
            )
          })}
        </div>

        {selectedArticle && (
          <article className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm mb-3">
              <span className="inline-flex px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
                {selectedArticle.category}
              </span>
              <span className="text-gray-500">{selectedArticle.date}</span>
            </div>

            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
              {selectedArticle.title}
            </h3>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              {selectedArticle.excerpt}
            </p>

            <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              {selectedArticle.paragraphs.map((paragraph, index) => (
                <p key={`${selectedArticle.id}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </article>
        )}
      </div>
    </section>
  )
}
