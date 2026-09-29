export interface BookEvent {
  id: number | string;
  action: 'clicked' | 'favourited';
}
