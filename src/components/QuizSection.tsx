import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/thaiCultureData';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  HelpCircle, 
  Sparkles, 
  Printer, 
  Share2, 
  BookOpen, 
  ChevronRight,
  UserCheck
} from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});
  const [hasAnsweredCurrent, setHasAnsweredCurrent] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  
  // Certificate custom student name
  const [studentName, setStudentName] = useState<string>('');
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  // Calculate current total score
  const score = Object.entries(selectedAnswers).reduce((acc, [qId, ansIndex]) => {
    const question = QUIZ_QUESTIONS.find((q) => q.id === Number(qId));
    if (question && question.correctAnswerIndex === ansIndex) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const handleSelectOption = (optionIndex: number) => {
    if (hasAnsweredCurrent) return; // Prevent multiple clicks on the same question

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
    setHasAnsweredCurrent(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setHasAnsweredCurrent(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setHasAnsweredCurrent(false);
    setQuizFinished(false);
    setShowCertificate(false);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  // Performance message
  const getFeedbackMessage = (finalScore: number) => {
    if (finalScore === 5) {
      return {
        title: 'ยอดเยี่ยมมาก! ผู้เชี่ยวชาญวัฒนธรรมไทย',
        desc: 'คุณตอบคำถามได้ถูกต้องครบทั้ง 5 ข้อ สะท้อนถึงความเข้าใจและเห็นคุณค่าในมรดกทางวัฒนธรรมไทยอย่างแท้จริง!',
        level: 'ระดับดีเยี่ยม (คะแนนเต็ม 100%)',
        badgeColor: 'text-amber-800 bg-amber-100 border-amber-300'
      };
    } else if (finalScore >= 3) {
      return {
        title: 'เก่งมาก! ผู้รอบรู้เสน่ห์ไทย',
        desc: 'คุณมีความรู้ความเข้าใจในวัฒนธรรม ประเพณี และมารยาทไทยเป็นอย่างดี สามารถนำไปต่อยอดและแบ่งปันแก่ผู้อื่นได้',
        level: 'ระดับดีมาก (คะแนนผ่านเกณฑ์มาตรฐาน)',
        badgeColor: 'text-emerald-800 bg-emerald-100 border-emerald-300'
      };
    } else {
      return {
        title: 'เริ่มต้นได้ดี! ร่วมเรียนรู้ต่อไป',
        desc: 'คุณได้เรียนรู้เกร็ดสำคัญหลายประการ ลองกลับไปทบทวนบทเรียนในแต่ละหมวดแล้วมาทดสอบใหม่อีกครั้งนะ!',
        level: 'ระดับกำลังพัฒนาความรู้',
        badgeColor: 'text-stone-800 bg-stone-100 border-stone-300'
      };
    }
  };

  const feedback = getFeedbackMessage(score);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold tracking-wide">
          <Award className="w-3.5 h-3.5 text-amber-600" />
          บททดสอบวัดผลการเรียนรู้
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          แบบทดสอบความรู้ "เสน่ห์วัฒนธรรมไทย"
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed">
          ทดสอบความรู้ความเข้าใจเกี่ยวกับประเพณี อาหาร การแต่งกาย และมารยาทไทย ทั้งหมด 5 ข้อ พร้อมเฉลยละเอียดและรับเกียรติบัตรออนไลน์
        </p>
      </div>

      {!quizFinished ? (
        /* QUIZ IN PROGRESS */
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-lg space-y-8 animate-in fade-in duration-200">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                ข้อที่ {currentQuestionIndex + 1} จาก {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Score tracker */}
            <div className="text-xs font-semibold text-stone-600">
              คะแนนปัจจุบัน: <span className="text-amber-700 font-bold">{score}</span> / {QUIZ_QUESTIONS.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-amber-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="space-y-3">
            <h2 className="font-heading text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
              {currentQuestionIndex + 1}. {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedAnswers[currentQ.id] === optIdx;
              const isCorrect = optIdx === currentQ.correctAnswerIndex;

              let buttonStyle = 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800';

              if (hasAnsweredCurrent) {
                if (isCorrect) {
                  buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-xs ring-1 ring-emerald-500';
                } else if (isSelected && !isCorrect) {
                  buttonStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                } else {
                  buttonStyle = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={hasAnsweredCurrent}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 cursor-pointer disabled:cursor-default ${buttonStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/80 border border-stone-300 text-stone-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="text-sm sm:text-base font-medium leading-relaxed">
                      {option}
                    </span>
                  </div>

                  {hasAnsweredCurrent && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {hasAnsweredCurrent && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Explanation upon Answering */}
          {hasAnsweredCurrent && (
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-amber-900 font-heading font-bold text-sm sm:text-base">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>
                  {selectedAnswers[currentQ.id] === currentQ.correctAnswerIndex ? 'ถูกต้องยอดเยี่ยม!' : 'คำเฉลยและเหตุผล:'}
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                {currentQ.explanation}
              </p>

              <div className="pt-2 border-t border-amber-200/60 flex items-center gap-2 text-xs text-amber-950 font-medium">
                <BookOpen className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>เกร็ดความรู้: {currentQ.learningFact}</span>
              </div>
            </div>
          )}

          {/* Next Button */}
          {hasAnsweredCurrent && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextQuestion}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>{currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'ข้อถัดไป' : 'ดูผลคะแนนรวม'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* QUIZ COMPLETED / RESULTS & CERTIFICATE */
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Result Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${feedback.badgeColor}`}>
                {feedback.level}
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-stone-900">
                {feedback.title}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto">
                {feedback.desc}
              </p>
            </div>

            {/* Score Ring / Number */}
            <div className="bg-stone-50 rounded-2xl py-6 px-4 max-w-xs mx-auto border border-stone-200">
              <span className="text-4xl sm:text-5xl font-bold text-amber-700 font-heading block">
                {score} <span className="text-stone-400 text-2xl font-normal">/ {QUIZ_QUESTIONS.length}</span>
              </span>
              <span className="text-xs text-stone-500 mt-1 block">
                คะแนนความรอบรู้วัฒนธรรมไทย
              </span>
            </div>

            {/* Action buttons: Certificate & Restart */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setShowCertificate(true)}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>รับเกียรติบัตรออนไลน์</span>
              </button>

              <button
                onClick={handleRestartQuiz}
                className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium rounded-xl transition-all flex items-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <RotateCcw className="w-4 h-4 text-stone-600" />
                <span>ทำแบบทดสอบอีกครั้ง</span>
              </button>
            </div>
          </div>

          {/* SIMULATED ONLINE CERTIFICATE MODAL / VIEW */}
          {showCertificate && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-2xl space-y-8 animate-in slide-in-from-bottom duration-300">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-stone-900">
                    เกียรติบัตรการเรียนรู้วัฒนธรรมไทยออนไลน์
                  </h3>
                  <p className="text-xs text-stone-500">
                    กรอกชื่อเพื่อพิมพ์หรือบันทึกเกียรติบัตรสำหรับแฟ้มสะสมผลงาน (Portfolio)
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrintCertificate}
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>พิมพ์เกียรติบัตร</span>
                  </button>
                </div>
              </div>

              {/* Student Name Input */}
              <div className="max-w-md mx-auto">
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  ระบุชื่อ - นามสกุล ของผู้รับการประเมิน:
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="เช่น นายธนากร รักภาษาไทย หรือ ด.ญ. อักษรา ศิลป์สยาม"
                  className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                />
              </div>

              {/* Printable Certificate Frame */}
              <div className="bg-[#fcfaf5] border-8 border-double border-amber-600/60 rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden shadow-inner">
                
                {/* Decorative floral watermark corner */}
                <div className="absolute top-4 left-4 text-amber-600/30 text-2xl font-serif select-none">✦</div>
                <div className="absolute top-4 right-4 text-amber-600/30 text-2xl font-serif select-none">✦</div>
                <div className="absolute bottom-4 left-4 text-amber-600/30 text-2xl font-serif select-none">✦</div>
                <div className="absolute bottom-4 right-4 text-amber-600/30 text-2xl font-serif select-none">✦</div>

                <div className="space-y-6 max-w-2xl mx-auto">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-widest block">
                      เกียรติบัตรฉบับนี้ให้ไว้เพื่อแสดงว่า
                    </span>
                    <h2 className="font-heading text-2xl sm:text-4xl font-bold text-amber-950 py-2 min-h-[50px] border-b border-amber-300/80 max-w-md mx-auto">
                      {studentName.trim() || 'นักเรียน / นักศึกษาผู้ใฝ่รู้'}
                    </h2>
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                    ได้ผ่านการทดสอบองค์ความรู้ด้านวัฒนธรรมไทย ประเพณี อาหาร การแต่งกาย และมารยาทไทย
                    <br />
                    จากโครงการเพื่อการศึกษา <strong className="text-amber-900">"เสน่ห์วัฒนธรรมไทย"</strong>
                  </p>

                  <div className="py-2 inline-block px-4 rounded-xl bg-amber-100/60 border border-amber-200">
                    <span className="text-xs font-bold text-amber-900">
                      ผลการประเมิน: ได้คะแนน {score} จาก 5 คะแนน ({feedback.level})
                    </span>
                  </div>

                  <div className="pt-6 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
                    <div>
                      <span>วันที่ทดสอบ: {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="text-center sm:text-right">
                      <span className="font-semibold text-amber-950 block">ศูนย์การเรียนรู้เสน่ห์วัฒนธรรมไทย</span>
                      <span className="text-[10px] text-stone-400">Thai Cultural Educational Gateway</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* Full Review of All 5 Questions & Explanations */}
          <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
            <h3 className="font-heading text-xl font-bold text-stone-900">
              เฉลยและทบทวนข้อสอบครบทั้ง 5 ข้อ
            </h3>

            <div className="space-y-4">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctAnswerIndex;

                return (
                  <div key={q.id} className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-heading font-bold text-sm sm:text-base text-stone-900">
                        {idx + 1}. {q.question}
                      </h4>
                      {isCorrect ? (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0">
                          ถูกต้อง
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 text-xs font-bold shrink-0">
                          ยังไม่ถูกต้อง
                        </span>
                      )}
                    </div>

                    <div className="text-xs sm:text-sm text-stone-700 bg-stone-50 p-3 rounded-xl">
                      <strong className="text-emerald-700">คำตอบที่ถูกต้อง:</strong> {q.options[q.correctAnswerIndex]}
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed pt-1">
                      {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
