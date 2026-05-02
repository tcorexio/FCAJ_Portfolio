import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { useLanguage } from '../contexts/LanguageContext';
import { loadContent } from '../utils/contentLoader';
import { AnimatedPage } from '../components/AnimatedPage';
import { SectionHeader } from '../components/SectionHeader';

// Worklog overview page - links to individual weeks
export function WorklogPage() {
    const { language } = useLanguage();

    const weeks = [
        { week: 1, task: { en: 'Establish a complete digital working environment for the NeuraX team (Discord, GitHub, Trello).', vi: 'Thiết lập môi trường làm việc kỹ thuật số hoàn chỉnh cho nhóm NeuraX (Discord, GitHub, Trello).' } },
        { week: 2, task: { en: 'Finalize and submit the NutriTrack Project Proposal for Mentor approval.', vi: 'Hoàn thiện và nộp bản Đề xuất Dự án (Proposal) NutriTrack cho Mentor phê duyệt.' } },
        { week: 3, task: { en: 'Deepen research into Amazon Bedrock models and their respective strengths.', vi: 'Đi sâu nghiên cứu về các model trên Amazon Bedrock và thế mạnh tương ứng.' } },
        { week: 4, task: { en: 'Cross-check AI JSON outputs against the Database schemas built by the Developer.', vi: 'Đối chiếu chéo JSON output của AI với Schema Database do Developer thiết kế.' } },
        { week: 5, task: { en: 'Formally request and activate Bedrock model access in the AWS Console.', vi: 'Yêu cầu và kích hoạt chính thức quyền truy cập model Bedrock trên AWS Console.' } },
        { week: 6, task: { en: 'Construct the complex `VOICE_PROMPT` template.', vi: 'Cấu trúc cẩn thận bộ template `VOICE_PROMPT`.' } },
        { week: 7, task: { en: 'Design the `RECIPE_SYSTEM_PROMPT` emphasizing the usage of expiring fridge items.', vi: 'Thiết kế `RECIPE_SYSTEM_PROMPT` nhấn mạnh định lý sử dụng những nguyên liệu sắp hết hạn.' } },
        { week: 8, task: { en: 'Implement the `generate_recipes` Lambda function to talk to Claude 3.5 Sonnet v2.', vi: 'Lên code thực tế cho hàm `generate_recipes` Lambda kết nối với cục Claude 3.5 Sonnet v2.' } },
    ];

    return (
        <AnimatedPage>
            <div className="page-container">
                <Breadcrumb items={[{ label: 'Worklog' }]} />

                <SectionHeader
    icon="worklog"
    title={language === 'en' ? 'WORKLOG' : 'NHẬT KÝ THỰC TẬP'}
/>

                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm mb-12">
                    <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                        {language === 'en'
                            ? 'On this page, you will need to introduce your worklog. How did you complete it? How many weeks did you take to complete the program? What did you do in those weeks?'
                            : 'Trên trang này, bạn cần giới thiệu nhật ký làm việc của mình. Bạn đã hoàn thành nó như thế nào? Bạn mất bao nhiêu tuần để hoàn thành chương trình? Bạn đã làm gì trong những tuần đó?'}
                    </p>

                    <p className="text-text-secondary text-lg leading-relaxed">
                        {language === 'en'
                            ? 'Typically, and as a standard, a worklog is carried out over about 3 months (throughout the internship period) with weekly contents as follows:'
                            : 'Thông thường, và theo tiêu chuẩn, nhật ký làm việc được thực hiện trong khoảng 3 tháng (suốt thời gian thực tập) với nội dung hàng tuần như sau:'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {weeks.map((item) => (
                        <Link
                            key={item.week}
                            to={`/worklog/week-${item.week}`}
                            className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                </svg>
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="week-badge">
                                        {item.week}
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-colors duration-300">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-accent-orange transition-colors">
                                    {language === 'en' ? `Week ${item.week}` : `Tuần ${item.week}`}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                    {item.task[language]}
                                </p>

                                <div className="mt-auto pt-4 flex items-center text-sm font-medium text-accent-orange opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    {language === 'en' ? 'View Details' : 'Xem Chi Tiết'}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </AnimatedPage>
    );
}

export function WeekWorklogPage({ weekNumber }: { weekNumber: number }) {
    const { language } = useLanguage();
    const content = loadContent(`worklog/week-${weekNumber}`, language);

    return (
        <AnimatedPage>
            <div className="page-container">
                <Breadcrumb
                    items={[
                        { label: 'Worklog', path: '/worklog' },
                        { label: `${language === 'en' ? 'Week' : 'Tuần'} ${weekNumber}` },
                    ]}
                />

                <SectionHeader
                    icon="worklog"
                    title={language === 'en' ? `WEEK ${weekNumber} WORKLOG` : `NHẬT KÝ TUẦN ${weekNumber}`}
                />

                <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <MarkdownRenderer content={content} />
                </div>
            </div>
        </AnimatedPage>
    );
}

export function Week1Page() { return <WeekWorklogPage weekNumber={1} />; }
export function Week2Page() { return <WeekWorklogPage weekNumber={2} />; }
export function Week3Page() { return <WeekWorklogPage weekNumber={3} />; }
export function Week4Page() { return <WeekWorklogPage weekNumber={4} />; }
export function Week5Page() { return <WeekWorklogPage weekNumber={5} />; }
export function Week6Page() { return <WeekWorklogPage weekNumber={6} />; }
export function Week7Page() { return <WeekWorklogPage weekNumber={7} />; }
export function Week8Page() { return <WeekWorklogPage weekNumber={8} />; }

