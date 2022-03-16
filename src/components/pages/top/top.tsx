import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import db from "../../../firebase";
import { collection, getDocs, onSnapshot} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

type dbType = {
  id: string;
  name: string;
  sig: string;
}


export const Top = () => {
  // アクション発行できるようになる
  const dispatch = useDispatch();
  const [posts, setPosts] = useState();
  const [info, setInfo] = useState<dbType[]>([]);

  useEffect(() => {
    // データを取得する。
    const info = collection(db, 'users');
    getDocs(info).then((snapShot) => {
      console.log(snapShot.docs.map((doc) => ({...doc.data()})));
    })

    console.log(uuidv4());

    // リアルタイムに取得
    onSnapshot(info, (v) => {
      console.log(v.docs.map((doc) => ({...doc.data()})));
    })
  }, []);

  return (
    <div className={'top'}>
    </div>
  );
};