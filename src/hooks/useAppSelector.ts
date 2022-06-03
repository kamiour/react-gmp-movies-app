import { useSelector } from 'react-redux';
import { RootState } from '../store';

// Use throughout your app instead of plain `useSelector`
export const useAppSelector: <Selected extends unknown>(
  selector: (state: RootState) => Selected,
  equalityFn?: ((previous: Selected, next: Selected) => boolean) | undefined
) => Selected = useSelector;
