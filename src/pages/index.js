// import './theme.less'
import styles from './index.less';
import Link from 'umi/link'

export default () => {
  return (
    <div>
      <div className={styles['container']}>
        123
    </div>
      <div>
        <Link to="/vlog">vlog</Link>
      </div>
    </div>
  );
}
