import React from 'react';
import './Home.css' ;
import Header from '../../common/header/Header';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import moviesData from '../../common/moviesData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
  },
  titleBar: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function SingleLineGridList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={6}>
        {moviesData.map((tile) => (
          <GridListTile key={tile.id}>
            <img src={tile.poster_url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
             />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
const url='';
function TitlebarGridList() {
  return (
    <div className='root2'>
      <GridList cellHeight={350} className='gridList2' cols={4}>
        {moviesData.map((tile) => (
          <GridListTile key={tile.id}>
            <a href={url}>
              <img src={tile.poster_url} alt={tile.title} />
            </a>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Release Date: {tile.release_date.substring(0,10)}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

class Home extends React.Component{
    render(){
        return (
          <>
            <div className='home-div'>
              <Header/>
            </div>
            <div className='upcoming-heading'>
              <span>Upcoming Movies</span>
            </div>
            <div className='list-div'>
              <SingleLineGridList />
            </div>
            <div className='flex-container'>
              <div className='left'>
                <TitlebarGridList />
              </div>
              <div className='form-div'>
                we will have a form here
              </div>
            </div>
          </>
        )
    }
}
export default Home;