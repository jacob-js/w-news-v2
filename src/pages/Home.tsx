import Wrapper from '../components/Wrapper'
import Title from '../components/ui/Title'

function Home() {
    const filterKeyword = "";

  return (
    <Wrapper>
        <div className='mt-14'>
            <Title text={filterKeyword ? `Result for "${filterKeyword}" in articles`: "The world's latest news"} onBack={() =>{}} withBackIcon={Boolean(filterKeyword)} />

            {
                <div className='flex justify-center p-10 flex-col items-center gap-5'>
                    <img src="/empty.svg" alt="No data!" className="w-32 object-center" />
                    <div className="text-gray-600 ml-3">No Data Found!</div>
                </div>
            }
        </div>
    </Wrapper>
  )
}

export default Home