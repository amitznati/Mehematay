import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper
    }
  })
);

interface CustomVirtualizedListProps {
  items: Array<string>;
  selectedValue: string;
  onSelect: (value: string) => void;
}

const CustomVirtualizedList: React.FC<CustomVirtualizedListProps> = ({
  items,
  onSelect,
  selectedValue
}) => {
  const classes = useStyles();
  function renderRow(props: ListChildComponentProps): JSX.Element {
    const { index, style } = props;

    return (
      <ListItem
        button
        style={style}
        key={index}
        onClick={(): void => onSelect(items[index])}
        selected={items[index] === selectedValue}
      >
        <ListItemText primary={items[index]} />
      </ListItem>
    );
  }
  return (
    <div className={classes.root}>
      <FixedSizeList
        height={400}
        width={300}
        itemSize={46}
        initialScrollOffset={items.indexOf(selectedValue) * 46}
        itemCount={items.length}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
};

export default CustomVirtualizedList;
