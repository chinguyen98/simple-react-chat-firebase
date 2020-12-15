export default interface IRoom {
  uid: string;
  displayName: string;
  isLocked: boolean;
  hostestId: string;
  numberOfOnliner: number;
}