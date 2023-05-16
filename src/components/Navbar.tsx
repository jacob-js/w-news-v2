import { Button, Input } from '@mui/joy'
import { ChangeEvent, ReactElement, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper'
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';
import { filterArticles, setFilterKeyWord } from '../store/slices/articles.slice';

function NavBar() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const filterKeyword = useAppSelector(state => state.articles.filterKeyword);
  
  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>)  =>{
    const {value} = event.target;
    dispatch(setFilterKeyWord(value));
    dispatch(filterArticles({query: value}))
  }

  return (
    <Wrapper>
      <div className='flex justify-between items-center py-5 sm:py-10'>
          <div className={`cursor-pointer ${showMobileSearch ? 'hidden sm:block': ''}`} onClick={() =>navigate('/')}>
              <img src="/logo.png" alt="" className='w-12' />
          </div>
          <div className="hidden sm:block">
            <Input 
              startDecorator={<AiOutlineSearch />}
              placeholder='Enter a keyword to filter'
              variant="soft"
              size="lg"
              className="w-80"
              value={filterKeyword} onChange={handleSearchValueChange}
             />
          </div>
          {
            showMobileSearch ?
            <div className="block sm:hidden w-full animate-grow">
              <Input 
                startDecorator={<AiOutlineSearch />}
                placeholder='Enter a keyword to filter'
                variant="soft"
                fullWidth
                autoFocus
                onBlur={() =>setShowMobileSearch(false)}
                value={filterKeyword}
                onChange={handleSearchValueChange}
               />
            </div>:
            <div className="block sm:hidden">
              <Button variant="soft" color='neutral' onClick={() =>setShowMobileSearch(true)}><AiOutlineSearch /></Button>
            </div>
          }
      </div>
    </Wrapper>
  )
};

function withNavBar(Component: () => ReactElement){
  return <div className="min-h-screen">
    <NavBar />
    <Component />
  </div>
}

export default withNavBar;