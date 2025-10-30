import React from "react";

const Footer = ({ completedTaskCount = 0, activeTaskCount = 0 }) => {
  return (
    <>
      {completedTaskCount + activeTaskCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTaskCount > 0 && (
              <>
                {" "}
                Tuyệt vời bạn đã hoàn thành {completedTaskCount} công việc
                {activeTaskCount > 0 &&
                  `, còn ${activeTaskCount} việc nữa thôi, cố lên nào`}
              </>
            )}
          </p>
          {completedTaskCount === 0 && activeTaskCount > 0 && (
            <>Hãy bắt đầu công việc</>
          )}
        </div>
      )}
    </>
  );
};

export default Footer;
