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
}));

function SingleLineGridList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6}>
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
          </>
        )
    }
}
export default Home;