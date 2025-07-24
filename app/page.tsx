
import NormalButton from "../components/NormalButton";

const Home = () => {

  const sampleText = `
    안녕하세요.
    저는 김선용 입니다.

    tailwindcss 적용완료
    front : nextjs version 15
    back : fastapi python version 3.12.11

    초기 환경 세팅을 완료하였습니다.
  `

  return (
    <>
      <div>
        <span className="whitespace-pre">
          {sampleText}
        </span>
      </div>
      <div className="text-blue-700 text-2xl mb-4">
        아래 버튼을 누르면 api 통신 여부를 확인할 수 있습니다. (브라우저 콘솔 확인)
      </div>
      <div 
        className="w-36 border bg-green-300 text-red-700 text-lg flex justify-center"
      >
        <NormalButton
          title='눌러눌러!!!!'
          className="w-full"
        />
      </div>
    </>
  );
}

export default Home;