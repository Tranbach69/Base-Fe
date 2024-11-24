import { useState } from "react";

// Enum giống như trong class
export const ExceptionType = {
  PostFailed: 1,
  GetFailed: 2,
  BadRequest: 3,
  Unauthorized: 4,
  NotAcceptable: 5,
};

// Chúng ta chỉ cần tạo đối tượng exception
export const useException = () => {
  const [exception, setException] = useState(null);

  // Phương thức tạo exception BadRequest
  const createBadRequestException = (message) => {
    const ex = {
      Type: ExceptionType.BadRequest,
      Message: message,
    };
    setException(ex);
  };

  // Phương thức tạo exception "Dữ liệu không hợp lệ"
  const createDataInvalidException = (message = "Dữ liệu không hợp lệ, vui lòng kiểm tra thông tin đã nhập.") => {
    const ex = {
      Type: ExceptionType.BadRequest,
      Message: message,
    };
    setException(ex);
  };

  // Phương thức tạo exception từ danh sách lỗi
  const createListDataInvalidException = (lstMessage) => {
    const ex = {
      Type: ExceptionType.BadRequest,
      Message: lstMessage.join("\n"),
    };
    setException(ex);
  };

  return {
    exception,
    createBadRequestException,
    createDataInvalidException,
    createListDataInvalidException,
  };
};
