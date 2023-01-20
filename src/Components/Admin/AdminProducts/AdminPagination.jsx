import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Flex,
	IconButton,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/Admin/admin.actions";
import {
	RxDoubleArrowLeft,
	RxChevronLeft,
	RxDoubleArrowRight,
	RxChevronRight,
} from "react-icons/rx";
import { getRequestAPI } from "../../util/getRequestAPI";

const AdminPagination = ({ currentPage, setPage }) => {
	const [data, setData] = useState([]);
	const pages = Math.ceil(data.length / 15);

	const handleChange = (value) => {
		setPage((prev) => Number(prev) + value);
	};
	const handlePress = (e) => {
		if (e.key === "Enter") {
			if (e.target.value > pages) return setPage(pages);
			if (e.target.value <= 0) return setPage(1);
			setPage(Number(e.target.value));
		}
	};
	useEffect(() => {
		getRequestAPI().then((res) => setData(res));
		// console.log(response);
	}, []);
	// console.log(currentPage);

	return (
		<Box>
			<Flex gap={5}>
				<ButtonGroup isDisabled={currentPage === 1}>
					<IconButton
						icon={<RxDoubleArrowLeft />}
						aria-label="First Page"
						onClick={() => setPage(1)}
					/>
					<IconButton
						icon={<RxChevronLeft />}
						aria-label="Previous Page"
						onClick={() => handleChange(-1)}
					/>
				</ButtonGroup>
				<Flex gap={5}>
					<Text>
						{currentPage} of {pages}
					</Text>
					<Flex gap={1}>
						<Text>Go To Page:</Text>
						<NumberInput
							defaultValue={1}
							min={1}
							max={pages}
							onKeyDown={handlePress}
							value={currentPage}
						>
							<NumberInputField />
						</NumberInput>
					</Flex>
				</Flex>
				<ButtonGroup isDisabled={currentPage === pages} spacing={2}>
					<IconButton
						icon={<RxChevronRight />}
						aria-label="Next Page"
						onClick={() => handleChange(1)}
					/>
					<IconButton
						icon={<RxDoubleArrowRight />}
						aria-label="Last Page"
						onClick={() => setPage(pages)}
					/>
				</ButtonGroup>
			</Flex>
		</Box>
	);
};

export default AdminPagination;
