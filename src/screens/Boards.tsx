import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { projects } from "../common/constants";

const Boards: React.FC = () => {
  const [boards, setBoards] = useState(projects);

  const [currentBoard, setCurrentBoard] = useState<Board | null>(null);
  const [currentItem, setCurrentItem] = useState<BoardItem | null>(null);

  const dragOverHandler = (e: any) => {
    e.preventDefault();
    if (e.target.className == "board__item") {
      e.target.style.boxShadow = "0 2px 3px gray";
    }
  };

  const dragLeaveHandler = (e: any) => {
    e.target.style.boxShadow = "none";
  };

  const dragStartHandler = (board: Board, item: BoardItem) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const dragEndHandler = (e: any) => {
    e.target.style.boxShadow = "none";
  };

  const dropHandler = (e: any, board: Board, item: BoardItem) => {
    if (currentBoard && currentItem) {
      e.stopPropagation();
      const currentIndex = currentBoard.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
      const dropIndex = board.items.indexOf(item);
      board.items.splice(dropIndex + 1, 0, currentItem);
      setBoards(
        boards.map((item: Board) => {
          if (item.id === board.id) {
            return board;
          }
          if (item.id === currentBoard.id) {
            return currentBoard;
          }
          return item;
        })
      );
      e.target.style.boxShadow = "none";
    }
  };

  const dropCardHandler = (e: any, board: Board) => {
    if (currentBoard && currentItem) {
      board.items.push(currentItem);
      const currentIndex = currentBoard.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
      setBoards(
        boards.map((item: Board) => {
          if (item.id === board.id) {
            return board;
          }
          if (item.id === currentBoard.id) {
            return currentBoard;
          }
          return item;
        })
      );
      e.target.style.boxShadow = "none";
    }
  };

  return (
    <div className="boardWrapper">
      {boards.map((board: Board) => {
        return (
          <div
            onDragOver={(e) => {
              dragOverHandler(e);
            }}
            onDrop={(e) => {
              dropCardHandler(e, board);
            }}
            key={board.id}
            className="board"
          >
            <p className="board__title">{board.title}</p>
            {board.items.map((item: BoardItem) => {
              return (
                <div
                  onDragOver={(e) => {
                    dragOverHandler(e);
                  }}
                  onDragLeave={(e) => {
                    dragLeaveHandler(e);
                  }}
                  onDragStart={() => {
                    dragStartHandler(board, item);
                  }}
                  onDragEnd={(e) => {
                    dragEndHandler(e);
                  }}
                  onDrop={(e) => {
                    dropHandler(e, board, item);
                  }}
                  draggable
                  key={item.id}
                  className="board__item"
                >
                  {item.title}
                </div>
              );
            })}
            <CustomButton
              styles={{ marginTop: 15 }}
              onClick={() => {}}
              title="Create"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Boards;
