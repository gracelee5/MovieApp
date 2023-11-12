import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tvContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tvItem: {
    width: 200, /* 포스터 너비 지정 */
    margin: theme.spacing(1), /* 각 아이템 간격 지정 */
  },
  tvItemImage: {
    width: '100%',
    height: 'auto',
  },
}));
