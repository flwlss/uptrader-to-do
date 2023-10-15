import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { availableBoards, availableProjects } from "../common/constants";
import { useParams } from "react-router-dom";
import CreateTask from "../modals/CreateTask";

const Boards: React.FC = () => {
  const { id } = useParams();

  const [boards, setBoards] = useState(availableBoards);
  const [projects, setProjects] = useState(
    availableProjects.find((x) => x.id === +id!)
  );
  const [showModal, setShowModal] = useState(false);

  const [currentBoard, setCurrentBoard] = useState<Board | null>(null);
  // const [currentItem, setCurrentItem] = useState<BoardItem | null>(null);

  // const dragOverHandler = (e: any) => {
  //   e.preventDefault();
  //   if (e.target.className == "board__item") {
  //     e.target.style.boxShadow = "0 2px 3px gray";
  //   }
  // };

  // const dragLeaveHandler = (e: any) => {
  //   e.target.style.boxShadow = "none";
  // };

  // const dragStartHandler = (board: Board, item: BoardItem) => {
  //   setCurrentBoard(board);
  //   setCurrentItem(item);
  // };

  // const dragEndHandler = (e: any) => {
  //   e.target.style.boxShadow = "none";
  // };

  // const dropHandler = (e: any, board: Board, item: BoardItem) => {
  //   if (currentBoard && currentItem) {
  //     e.stopPropagation();
  //     const currentIndex = currentBoard.items.indexOf(currentItem);
  //     currentBoard.items.splice(currentIndex, 1);
  //     const dropIndex = board.items.indexOf(item);
  //     board.items.splice(dropIndex + 1, 0, currentItem);
  //     setBoards(
  //       boards.map((item: Board) => {
  //         if (item.id === board.id) {
  //           return board;
  //         }
  //         if (item.id === currentBoard.id) {
  //           return currentBoard;
  //         }
  //         return item;
  //       })
  //     );
  //     e.target.style.boxShadow = "none";
  //   }
  // };

  // const dropCardHandler = (e: any, board: Board) => {
  //   if (currentBoard && currentItem) {
  //     board.items.push(currentItem);
  //     const currentIndex = currentBoard.items.indexOf(currentItem);
  //     currentBoard.items.splice(currentIndex, 1);
  //     setBoards(
  //       boards.map((item: Board) => {
  //         if (item.id === board.id) {
  //           return board;
  //         }
  //         if (item.id === currentBoard.id) {
  //           return currentBoard;
  //         }
  //         return item;
  //       })
  //     );
  //     e.target.style.boxShadow = "none";
  //   }
  // };

  return (
    <>
      <p
        style={{
          fontSize: 18,
          fontWeight: 500,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        {projects?.title}
      </p>
      <div className="boardWrapper">
        {showModal && (
          <CreateTask
            status={currentBoard?.title}
            closeModal={() => {
              setShowModal(false);
            }}
          />
        )}
        {boards.map((board: Board) => {
          return (
            <div
              // onDragOver={(e) => {
              //   dragOverHandler(e);
              // }}
              // onDrop={(e) => {
              //   dropCardHandler(e, board);
              // }}
              key={board.id}
              className="board"
            >
              <p className="board__title">{board.title}</p>
              {projects
                ?.items!.filter((x) => x.status === board.title)
                .map((item: ProjectItem) => {
                  return (
                    <div
                      // onDragOver={(e) => {
                      //   dragOverHandler(e);
                      // }}
                      // onDragLeave={(e) => {
                      //   dragLeaveHandler(e);
                      // }}
                      // onDragStart={() => {
                      //   dragStartHandler(board, item);
                      // }}
                      // onDragEnd={(e) => {
                      //   dragEndHandler(e);
                      // }}
                      // onDrop={(e) => {
                      //   dropHandler(e, board, item);
                      // }}
                      draggable
                      key={item.id}
                      className="board__item"
                    >
                      {item.title}
                    </div>
                  );
                })}
              <CustomButton
                style={{ marginTop: 15 }}
                onClick={() => {
                  setShowModal(true);
                  setCurrentBoard(board);
                }}
                title="Create"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Boards;
